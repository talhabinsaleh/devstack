import bannerStack from '../assets/banner-stack.png'

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
          <img
            src={bannerStack}
            alt="Isometric illustration of a layered development stack"
            className="w-64 sm:w-80"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
