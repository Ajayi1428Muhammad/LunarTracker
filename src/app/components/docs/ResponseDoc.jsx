import React from "react";

const Response = () => {
  return (
    <div>
      <section className="space-y-4" id="response-object-breakdown">
        <div>
          <h2 className="text-xl font-semibold text-neutral-100 gap-2 flex group items-center">
            <span>Response Object Breakdown</span>
            <a
              href="#response-object-breakdown"
              className="text-emerald-500/40 group-hover:text-emerald-400 font-mono transition-colors"
            >
              #
            </a>
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Detailed field schema and data types returned by the{" "}
            <code className="text-emerald-400">/api/date</code> endpoint.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/60">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-neutral-800 bg-neutral-900 text-neutral-400 uppercase tracking-wider font-mono">
              <tr>
                <th className="p-3.5">Field</th>
                <th className="p-3.5">Type</th>
                <th className="p-3.5">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-neutral-300 font-sans">
              <tr>
                <td className="p-3.5 font-mono text-emerald-400 font-semibold">
                  dayOfWeek
                </td>
                <td className="p-3.5 font-mono text-neutral-500">string</td>
                <td className="p-3.5">
                  Custom formatted day indicator (e.g.,{" "}
                  <code className="text-neutral-200 font-mono">"Jumu'ah"</code>{" "}
                  or standard weekday).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-2 pt-2">
          <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono font-semibold">
            hijri (Object)
          </span>
          <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/60">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-neutral-800 bg-neutral-900 text-neutral-400 uppercase tracking-wider font-mono">
                <tr>
                  <th className="p-3.5">Field</th>
                  <th className="p-3.5">Type</th>
                  <th className="p-3.5">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 text-neutral-300 font-sans">
                <tr>
                  <td className="p-3.5 font-mono text-emerald-400 font-semibold">
                    hijri.hijriDay
                  </td>
                  <td className="p-3.5 font-mono text-neutral-500">number</td>
                  <td className="p-3.5">
                    Current numerical day of the Islamic month (1-30).
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono text-emerald-400 font-semibold">
                    hijri.month
                  </td>
                  <td className="p-3.5 font-mono text-neutral-500">string</td>
                  <td className="p-3.5">
                    Official NMSC Hijri month name in English transliteration (e.g.,{" "}
                    <code className="text-neutral-200 font-mono">
                      "Jumada Al-Ula"
                    </code>
                    ).
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono text-emerald-400 font-semibold">
                    hijri.year
                  </td>
                  <td className="p-3.5 font-mono text-neutral-500">number</td>
                  <td className="p-3.5">
                    Current Hijri year (e.g.,{" "}
                    <code className="text-neutral-200 font-mono">1448</code>).
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono text-emerald-400 font-semibold">
                    hijri.arDayOfWeek
                  </td>
                  <td className="p-3.5 font-mono text-neutral-500">string</td>
                  <td className="p-3.5">
                    Arabic day of the week in native script (e.g.,{" "}
                    <code className="text-neutral-200 font-mono">الجمعة</code>).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono font-semibold">
            gregorian (Object)
          </span>
          <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/60">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-neutral-800 bg-neutral-900 text-neutral-400 uppercase tracking-wider font-mono">
                <tr>
                  <th className="p-3.5">Field</th>
                  <th className="p-3.5">Type</th>
                  <th className="p-3.5">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 text-neutral-300 font-sans">
                <tr>
                  <td className="p-3.5 font-mono text-emerald-400 font-semibold">
                    gregorian.gregorianDate
                  </td>
                  <td className="p-3.5 font-mono text-neutral-500">string</td>
                  <td className="p-3.5">
                    Standard ISO calendar date (
                    <code className="text-neutral-200 font-mono">
                      YYYY-MM-DD
                    </code>
                    ).
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono text-emerald-400 font-semibold">
                    gregorian.enDayOfWeek
                  </td>
                  <td className="p-3.5 font-mono text-neutral-500">string</td>
                  <td className="p-3.5">
                    English weekday name (e.g.,{" "}
                    <code className="text-neutral-200 font-mono">"Friday"</code>
                    ).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Response;
