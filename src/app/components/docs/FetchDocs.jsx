const FetchDoc = () => {
  const curlExample = `curl -X GET "https://lunartracker-ng.vercel.app/api/date" \\
  -H "Accept: application/json"`;

  const jsFetchExample = `// Client-side JavaScript / React
async function getLunarDate() {
  try {
    const {res} = await fetch("https://lunartracker-ng.vercel.app/api/date");
    if (!res.ok) throw new Error("Failed to fetch lunar date");

    const data = await res.json();
    const { hijri, gregorian } = data;
    console.log(\`Today: \${hijri.hijriDay} \${hijri.month} \${hijri.year}\`);
  } catch (error) {
    console.error("Error fetching date:", error);
  }
}`;

  return (
    <section className="space-y-6 max-w-full min-w-0" id="code-examples">
      <div>
        <h2 className="text-xl font-semibold text-neutral-100 gap-2 flex group items-center">
          <span>Code Examples</span>
          <a
            href="#code-examples"
            className="text-emerald-500/40 group-hover:text-emerald-400 font-mono transition-colors"
          >
            #
          </a>
        </h2>
        <p className="text-sm text-neutral-400 mt-1">
          Quick implementation snippets for fetching date data in cURL or
          client-side JavaScript.
        </p>
      </div>

      {/* cURL Example */}
      <div className="space-y-2 min-w-0">
        <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span className="uppercase tracking-wider font-semibold">
            Terminal / CLI
          </span>
          <span>cURL</span>
        </div>
        <div className="w-full min-w-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/80 p-4 font-mono text-xs sm:text-sm shadow-2xl">
          <pre className="overflow-x-auto scrollbar-none max-w-full text-neutral-200 leading-relaxed">
            <code>{curlExample}</code>
          </pre>
        </div>
      </div>

      {/* JavaScript Fetch Example */}
      <div className="space-y-2 min-w-0">
        <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span className="uppercase tracking-wider font-semibold">
            JavaScript / React
          </span>
          <span>Fetch API</span>
        </div>
        <div className="w-full min-w-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/80 p-4 font-mono text-xs sm:text-sm shadow-2xl">
          <pre className="overflow-x-auto scrollbar-none max-w-full text-emerald-400 leading-relaxed">
            <code>{jsFetchExample}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default FetchDoc;
