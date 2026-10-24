import React from 'react'

const InThisPage = () => {
    const sections = [
      { name: "Endpoint Overview", href: "#endpoint-overview" },
      { name: "Response Object Breakdown", href: "#response-object-breakdown" },
      { name: "Example Response", href: "#example-response-usage" },
      { name: "Code Examples", href: "#code-examples" },
    ];
  return (
    <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
      <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono font-semibold block mb-3">
        In This Chapter
      </span>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium">
        {sections.map((section) => (
          <li key={section.href}>
            <a
              href={section.href}
              className="text-neutral-300 hover:text-white/80 transition-colors flex items-center gap-2 group"
            >
              <span className="text-white/40 group-hover:text-white/80 font-mono text-xs">
                #
              </span>
              <span className='font-bold'>{section.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InThisPage
