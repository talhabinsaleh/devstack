function StackGraphic() {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
      <div className="absolute h-56 w-56 rounded-full bg-gradient-to-br from-orange-200 via-pink-200 to-violet-200 blur-2xl sm:h-72 sm:w-72" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="gradient-bg h-8 w-40 rounded-lg shadow-lg shadow-pink-200 sm:w-52" />
        <div className="h-8 w-48 rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200 sm:w-60" />
        <div className="gradient-bg h-8 w-56 rounded-lg opacity-80 shadow-lg shadow-violet-200 sm:w-64" />
        <div className="h-8 w-44 rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200 sm:w-56" />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base text-slate-500 sm:text-lg md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#technologies"
              className="gradient-bg w-full rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:opacity-90 sm:w-auto"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="w-full rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <StackGraphic />
        </div>
      </div>
    </section>
  )
}

export default Hero
