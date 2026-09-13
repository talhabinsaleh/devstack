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
      className="mx-auto -mt-6 mb-16 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">
          Your Stack <span className="gradient-text">({stack.length})</span>
        </h3>
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-medium text-rose-500 transition hover:text-rose-600"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <p className="rounded-lg border border-dashed border-slate-200 py-8 text-center text-sm text-slate-400">
          No technologies selected yet. Add some from the list above!
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3"
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
      )}
    </aside>
  )
}

export default StackSidebar
