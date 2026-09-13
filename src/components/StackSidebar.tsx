import type { Technology } from '../types/technology'

interface StackSidebarProps {
  stack: Technology[]
  onRemove: (id: number) => void
  onRemoveAll: () => void
}

function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  return (
    <aside
      id="projects"
      className="sticky top-24 w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {stack.length === 0
          ? 'No technologies selected yet.'
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <p className="mt-4 rounded-lg border border-dashed border-slate-200 py-8 text-center text-sm text-slate-400">
          Your stack is empty.
        </p>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-3">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={`${tech.name} icon`} className="h-6 w-6" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{tech.name}</p>
                    <p className="text-xs text-slate-400">{tech.category}</p>
                  </div>
                </div>
                <button
                  aria-label={`Remove ${tech.name}`}
                  onClick={() => onRemove(tech.id)}
                  className="text-slate-400 transition hover:text-rose-500"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-rose-200 py-2 text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default StackSidebar
