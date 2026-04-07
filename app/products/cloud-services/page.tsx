export default function CloudServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <h1 className="text-4xl font-bold">ThreeFk Nova Cloud Services</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-400">
        Secure hosting, deployment, reverse proxying, support, monitoring,
        backups, and managed release workflows for modern systems.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Service areas</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Dockerized deployments</li>
            <li>Traefik and reverse proxy setup</li>
            <li>Monitoring and uptime visibility</li>
            <li>Backups and controlled releases</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Operational benefit</h2>
          <p className="mt-4 text-slate-300">
            Cloud Services ensures your platforms are reliable, secure,
            maintainable, and ready for professional growth.
          </p>
        </div>
      </div>
    </main>
  );
}
