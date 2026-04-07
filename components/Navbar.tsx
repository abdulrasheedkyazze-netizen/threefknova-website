"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/system-requirements", label: "Requirements" },
  { href: "/ai-studio", label: "AI Studio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Sales" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,18,37,0.88)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/img/logo.png"
            alt="ThreeFk Nova"
            width={38}
            height={38}
            className="rounded-md object-contain"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight text-white">
              ThreeFk Nova
            </span>
            <span className="text-[11px] text-slate-400">Technologies</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-cyan-400/12 text-cyan-200"
                    : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden btn-primary text-sm sm:inline-flex">
            Request Demo
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/30 hover:text-cyan-300 md:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-slate-950/95 px-6 py-5 md:hidden"
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-cyan-400/12 text-cyan-200"
                      : "border border-white/8 bg-white/[0.03] text-slate-200 hover:border-cyan-400/30 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4">
            <Link href="/contact" className="btn-primary w-full" onClick={() => setOpen(false)}>
              Request Demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
