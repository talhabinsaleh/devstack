import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold">
          <span className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white">
            DS
          </span>
          <span className="text-slate-900">
            Dev<span className="gradient-text">Stack</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={
                  link === 'Home'
                    ? 'font-semibold text-pink-500'
                    : 'transition hover:text-slate-900'
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900">
            Sign In
          </button>
          <button className="gradient-bg rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-md shadow-pink-200 transition hover:opacity-90">
            Sign Up
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-slate-700" />
          <span className="h-0.5 w-6 bg-slate-700" />
          <span className="h-0.5 w-6 bg-slate-700" />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="mb-4 flex justify-center">
            <span className="text-lg font-bold text-slate-900">
              Dev<span className="gradient-text">Stack</span>
            </span>
          </div>
          <ul className="flex flex-col items-center gap-4 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-slate-900"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <button className="rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700">
              Sign In
            </button>
            <button className="gradient-bg rounded-lg py-2 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
