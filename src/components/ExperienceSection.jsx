import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="My academic journey and learning experiences."
      />

      <div className="mt-8">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology Student"
          organization="Cebu Institute of Technology – University"
          description="Currently pursuing a degree in Information Technology while developing programming skills and working on academic projects."
        />

        <TimelineItem
          period="2025 – 2026"
          title="Student Developer"
          organization="Academic Projects"
          description="Worked on school projects involving application development, database management, and user interface design."
        />

        
      </div>
    </section>
  )
}

export default ExperienceSection