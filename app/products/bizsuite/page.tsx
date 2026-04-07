export default function BizSuitePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <h1 className="text-4xl font-bold">ThreeFk Nova BizSuite</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-400">
        A business workflow platform built for quotations, invoicing, expenses,
        dashboards, approvals, and operational visibility.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Capabilities</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Quotation and invoicing workflows</li>
            <li>Expense and financial tracking</li>
            <li>Approvals and decision support</li>
            <li>Executive reporting dashboards</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Business value</h2>
          <p className="mt-4 text-slate-300">
            BizSuite helps companies improve accountability, process visibility,
            and operational discipline across finance and day-to-day workflows.
          </p>
        </div>
      </div>
    </main>
  );
}
