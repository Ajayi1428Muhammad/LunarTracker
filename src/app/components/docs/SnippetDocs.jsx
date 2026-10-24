import React from "react";

const Snippet = () => {
  const jsonResponse = {
    hijri: {
      hijriDay: 5,
      month: "Jumada Al-Ula",
      year: 1448,
      arDayOfWeek: "الجمعة",
    },
    gregorian: {
      gregorianDate: "2026-10-16",
      enDayOfWeek: "Friday",
    },
  };

  return (
    <div>
      <section className="space-y-4" id="example-response-usage">
        <div>
          <h2 className="text-xl font-semibold text-neutral-100 gap-2 flex group items-center">
            <span>Example Response & Usage</span>
            <a
              href="#example-response-usage"
              className="text-emerald-500/40 group-hover:text-emerald-400 font-mono transition-colors"
            >
              #
            </a>
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Sample payload returned by{" "}
            <code className="text-emerald-400">GET /api/date</code> and how to
            consume it in client applications.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span className="uppercase tracking-wider font-semibold">
              200 OK • application/json
            </span>
            <span>UTF-8</span>
          </div>

          <div className="relative min-w-0 rounded-xl border border-neutral-800 bg-neutral-900/80 p-4 font-mono text-xs sm:text-sm shadow-2xl overflow-x-auto scrollbar-none">
            <pre className="text-emerald-400 leading-relaxed">
              <code>{JSON.stringify(jsonResponse, null, 2)}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-2 pt-4 ">
          <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono font-semibold">
            Integration Snippet (JavaScript / React)
          </span>

          <div className="relative min-w-0 rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs text-neutral-300 overflow-x-auto scrollbar-none">
            <pre className="leading-relaxed">
              <code>{`async function getLunarDate() {
  const res = await fetch("/api/date");
  const { hijri, gregorian } = await res.json();

  console.log(\`Today is \${hijri.hijriDay} \${hijri.month} \${hijri.year}\`);
  // Output: "Today is 5 Jumada Al-Ula 1448"
}`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Snippet;
