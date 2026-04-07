import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <h1 className="text-4xl font-bold">Our Products</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-400">
        ThreeFk Nova products are designed to help organizations run more efficiently,
        scale professionally, and adopt AI with confidence.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Link href="/products/eduerp" className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
          <h2 className="text-xl font-semibold">EduERP</h2>
          <p className="mt-3 text-slate-300">School and institution management platform.</p>
        </Link>

        <Link href="/products/bizsuite" className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
          <h2 className="text-xl font-semibold">BizSuite</h2>
          <p className="mt-3 text-slate-300">Business operations and financial workflow platform.</p>
        </Link>

        <Link href="/products/cloud-services" className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
          <h2 className="text-xl font-semibold">Cloud Services</h2>
          <p className="mt-3 text-slate-300">Deployment, support, monitoring, and managed hosting.</p>
        </Link>
      </div>
    </main>
  );
}
