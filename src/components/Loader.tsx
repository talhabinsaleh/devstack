function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
      <p className="text-sm text-slate-400">Loading technologies…</p>
    </div>
  )
}

export default Loader
