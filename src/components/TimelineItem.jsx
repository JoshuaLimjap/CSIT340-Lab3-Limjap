function TimelineItem({ period, title, organization, description }) {
  return (
    <div className="relative border-l border-stone-300 pl-6 pb-8 last:pb-0">
      <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border-2 border-stone-900 bg-white" />

      <p className="text-sm text-stone-500">
        {period}
      </p>

      <h3 className="mt-1 font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-sm font-medium text-stone-600">
        {organization}
      </p>

      <p className="mt-2 text-sm leading-relaxed text-stone-600">
        {description}
      </p>
    </div>
  )
}

export default TimelineItem