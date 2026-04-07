import Image from "next/image";
import Link from "next/link";

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

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,18,37,0.85)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
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
            <span className="text-[11px] text-slate-400">
              Technologies
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary text-sm">
          Request Demo
        </Link>
      </div>
    </header>
  );
}