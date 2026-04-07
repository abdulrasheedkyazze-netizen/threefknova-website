import Image from "next/image";

interface Props {
  badge?: string;
  title: string;
  description?: string;
}

export default function PageHeader({ badge, title, description }: Props) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_20px_rgba(17,197,245,0.15)]">
          <Image
            src="/img/logo.png"
            alt="ThreeFk Nova"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        {badge && (
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300">
            {badge}
          </span>
        )}
      </div>

      <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h1>

      {description && (
        <p className="mt-4 text-lg text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}