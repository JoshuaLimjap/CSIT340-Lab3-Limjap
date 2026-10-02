import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Contact"
        subtitle="Feel free to reach out or connect with me."
      />

      <div className="mt-8">
        <ContactLink
          label="Email"
          value="limjapjoshua555@gmail.com"
          href="mailto:limjapjoshua555@gmail.com"
        />

        <ContactLink
          label="GitHub"
          value="Joshua Kent Niño Limjap"
          href="https://github.com/JoshuaLimjap"
        />

        
      </div>
    </section>
  )
}

export default ContactSection