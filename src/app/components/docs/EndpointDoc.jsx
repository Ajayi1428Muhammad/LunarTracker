
const Endpoint = () => {
  return (
    <div>
      <section className="space-y-4" id="endpoint-overview">
        <div>
          <h2 className="text-xl font-semibold text-neutral-100 gap-2 flex group items-center">
            <span>Endpoint Overview</span>
            <a
              href="#endpoint-overview"
              className="text-emerald-500/40 group-hover:text-emerald-400 font-mono transition-colors"
            >
              #
            </a>
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Retrieve real-time, NMSC-verified Hijri calendar data synchronized
            with official Nigerian moon-sighting records.
          </p>
        </div>

        {/* Endpoint Pill Banner */}
        <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm font-mono">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
            GET
          </span>
          <code className="text-neutral-200 font-semibold">/api/date</code>
          <span className="ml-auto text-xs text-neutral-500 font-sans border border-neutral-800 bg-neutral-950 px-2.5 py-1 rounded-full">
            No Authentication Required
          </span>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 ms:grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
            <span className="text-neutral-500 block mb-1">Base URL</span>
            <span className="text-neutral-200 font-mono">
              https://lunartracker-ng.vercel.app/
            </span>
          </div>
          <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
            <span className="text-neutral-500 block mb-1">Response Format</span>
            <span className="text-neutral-200 font-mono">application/json</span>
          </div>
          <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
            <span className="text-neutral-500 block mb-1">CORS Header</span>
            <span className="text-emerald-400 font-mono">
              Access-Control-Allow-Origin: *
            </span>
          </div>
          <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
            <span className="text-neutral-500 block mb-1">Rate Limit</span>
            <span className="text-neutral-200 font-mono">
              Tentatively 100 requests per minute.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Endpoint
