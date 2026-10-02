function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone-500">
          © 2026 Joshua Kent Niño Limjap. All rights reserved.
        </p>

        <a
          href="#top"
          className="text-sm text-stone-600 hover:text-stone-900"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer