import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 text-lg font-bold">
      <span className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white">
        DS
      </span>
      <span className="text-slate-900">
        Dev<span className="gradient-text">Stack</span>
      </span>
    </a>
  )
}

function NavLink({ link, onClick }: { link: string; onClick?: () => void }) {
  return (
    <a
      href={`#${link.toLowerCase()}`}
      onClick={onClick}
      className={
        link === 'Home'
          ? 'font-semibold text-pink-500'
          : 'transition hover:text-slate-900'
      }
    >
      {link}
    </a>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      {/* Desktop: logo left, links center, auth buttons right */}
      <nav className="mx-auto hidden max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:flex">
        <Logo />

        <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <NavLink link={link} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900">
            Sign In
          </button>
          <button className="gradient-bg rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md shadow-pink-200 transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile: hamburger left, logo center, auth buttons right */}
      <div className="grid grid-cols-3 items-center px-4 py-4 md:hidden">
        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 justify-self-start"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-slate-700" />
          <span className="h-0.5 w-6 bg-slate-700" />
          <span className="h-0.5 w-6 bg-slate-700" />
        </button>

        <div className="justify-self-center">
          <Logo />
        </div>

        <div className="flex items-center gap-2 justify-self-end">
          <button className="text-xs font-medium text-slate-700">Sign In</button>
          <button className="gradient-bg rounded-full px-3 py-1.5 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col items-center gap-4 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <NavLink link={link} onClick={() => setMenuOpen(false)} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
