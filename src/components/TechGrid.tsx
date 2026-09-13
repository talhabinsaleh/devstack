import type { Technology } from '../types/technology'
import TechCard from './TechCard'

interface TechGridProps {
  technologies: Technology[]
  stackIds: number[]
  onAdd: (tech: Technology) => void
}

function TechGrid({ technologies, stackIds, onAdd }: TechGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stackIds.includes(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}

export default TechGrid
