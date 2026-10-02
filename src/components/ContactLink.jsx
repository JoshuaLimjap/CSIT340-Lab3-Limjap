function ContactLink({ label, value, href }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between border-b border-stone-200 py-4 hover:text-stone-600"
    >
      <span className="font-medium">{label}</span>

      <span className="text-sm text-stone-500">
        {value}
      </span>
    </a>
  )
}

export default ContactLink