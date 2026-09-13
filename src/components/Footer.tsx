const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy', 'Terms'] },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/talhabinsaleh' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2 text-lg font-bold">
            <span className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white">
              DS
            </span>
            <span className="text-slate-900">
              Dev<span className="gradient-text">Stack</span>
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-slate-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-slate-500">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-900"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {group.title}
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} DevStack. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
