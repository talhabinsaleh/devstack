import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechGrid from './components/TechGrid'
import StackSidebar from './components/StackSidebar'
import Loader from './components/Loader'
import Footer from './components/Footer'
import type { Technology } from './types/technology'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [stack, setStack] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .finally(() => setLoading(false))
  }, [])

  const handleAdd = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  const handleRemove = (id: number) => {
    const tech = stack.find((item) => item.id === id)
    setStack((prev) => prev.filter((item) => item.id !== id))
    if (tech) toast.info(`${tech.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div className="min-h-screen bg-white text-slate-600">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore the <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 max-w-xl text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <TechGrid
                technologies={technologies}
                stackIds={stack.map((item) => item.id)}
                onAdd={handleAdd}
              />
            </div>
            <div className="lg:col-span-1">
              <StackSidebar stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
            </div>
          </div>
        )}
      </section>

      <section id="about" className="mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          About <span className="gradient-text">DevStack</span>
        </h2>
        <p className="mt-3 text-slate-500">
          DevStack is a learning project built to practice React, TypeScript, and
          component-driven UI design by letting you explore real-world web
          technologies and assemble your own development stack.
        </p>
      </section>

      <Footer />
      <ToastContainer theme="light" position="bottom-right" />
    </div>
  )
}

export default App
