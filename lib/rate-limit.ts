type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  namespace: string;
  key: string;
  max: number;
  windowMs: number;
};

type RateLimitResult = {
  ok: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
  retryAfter: number;
};

type GlobalWithRateStore = typeof globalThis & {
  __threefknovaRateStore?: Map<string, RateLimitEntry>;
};

const globalWithRateStore = globalThis as GlobalWithRateStore;

function getStore() {
  if (!globalWithRateStore.__threefknovaRateStore) {
    globalWithRateStore.__threefknovaRateStore = new Map<string, RateLimitEntry>();
  }

  return globalWithRateStore.__threefknovaRateStore;
}

function cleanupExpiredEntries(store: Map<string, RateLimitEntry>, now: number) {
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

export function checkRateLimit({
  namespace,
  key,
  max,
  windowMs,
}: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  const store = getStore();
  cleanupExpiredEntries(store, now);

  const storeKey = `${namespace}:${key}`;
  const current = store.get(storeKey);

  if (!current || current.resetAt <= now) {
    const nextEntry = {
      count: 1,
      resetAt: now + windowMs,
    };

    store.set(storeKey, nextEntry);

    return {
      ok: true,
      limit: max,
      remaining: Math.max(max - 1, 0),
      resetAt: nextEntry.resetAt,
      retryAfter: Math.ceil(windowMs / 1000),
    };
  }

  if (current.count >= max) {
    return {
      ok: false,
      limit: max,
      remaining: 0,
      resetAt: current.resetAt,
      retryAfter: Math.max(Math.ceil((current.resetAt - now) / 1000), 1),
    };
  }

  current.count += 1;
  store.set(storeKey, current);

  return {
    ok: true,
    limit: max,
    remaining: Math.max(max - current.count, 0),
    resetAt: current.resetAt,
    retryAfter: Math.max(Math.ceil((current.resetAt - now) / 1000), 1),
  };
}
