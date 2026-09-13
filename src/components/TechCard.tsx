import type { Technology } from '../types/technology'

interface TechCardProps {
  tech: Technology
  isAdded: boolean
  onAdd: (tech: Technology) => void
}

const BADGE_COLORS = [
  'bg-emerald-50 text-emerald-600',
  'bg-violet-50 text-violet-600',
  'bg-sky-50 text-sky-600',
  'bg-amber-50 text-amber-600',
  'bg-rose-50 text-rose-600',
]

function badgeColor(id: number) {
  return BADGE_COLORS[id % BADGE_COLORS.length]
}

function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={`${tech.name} icon`} className="h-10 w-10" />
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor(tech.id)}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-500">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-xs text-slate-500">{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-xs font-medium text-amber-500">
          ★ {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={
          isAdded
            ? 'mt-5 cursor-not-allowed rounded-lg bg-slate-100 py-2 text-sm font-semibold text-slate-400'
            : 'mt-5 rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white transition hover:bg-slate-800'
        }
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}

export default TechCard
