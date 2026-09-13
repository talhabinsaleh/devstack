export type TechCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Language'
  | 'Styling'
  | 'DevOps'
  | 'Tools'

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Technology {
  id: number
  name: string
  category: TechCategory
  description: string
  icon: string
  rating: number
  difficulty: Difficulty
  badge: string
}
