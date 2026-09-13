import type { Technology } from '../types/technology'
import TechCard from './TechCard'

interface TechGridProps {
  technologies: Technology[]
  stackIds: number[]
  onAdd: (tech: Technology) => void
}

function TechGrid({ technologies, stackIds, onAdd }: TechGridProps) {
  return (
    <section id="technologies" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            isAdded={stackIds.includes(tech.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  )
}

export default TechGrid
