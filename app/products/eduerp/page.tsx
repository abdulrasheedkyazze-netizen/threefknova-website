export default function EduERPPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <h1 className="text-4xl font-bold">ThreeFk Nova EduERP</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-400">
        A professional school and institution management platform built for academics,
        exams, finance, reports, governance, and long-term scalability.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Modules</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Academics and class management</li>
            <li>Exams and marks processing</li>
            <li>Finance and fee structures</li>
            <li>Reports and governance dashboards</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Why it matters</h2>
          <p className="mt-4 text-slate-300">
            EduERP helps schools centralize operations, reduce manual work,
            improve reporting, and prepare for future digital transformation.
          </p>
        </div>
      </div>
    </main>
  );
}
