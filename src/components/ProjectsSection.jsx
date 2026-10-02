import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Projects"
        subtitle="Some of the projects I have worked on."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="CampusFind"
          description="A campus lost-and-found application that helps students report missing items, post found belongings, and connect with their owners."
          tech="React · JavaScript · Tailwind CSS"
          link="https://github.com/"
        />

        <ProjectCard
          year="2026"
          title="DormDash"
          description="A smart student-living management app concept designed to help dormitory and boarding-house students organize shared expenses, chores, and daily needs."
          tech="Mobile App · UI/UX Design"
          link="https://github.com/"
        />

        <ProjectCard
          year="2026"
          title="LocalBites"
          description="A food discovery app concept that helps users explore food options and discover places to eat around the CIT community."
          tech="Mobile App · UI/UX Design"
          link="https://github.com/"
        />

        <ProjectCard
          year="2026"
          title="Personal Portfolio"
          description="A personal portfolio website built with React and Tailwind CSS to introduce myself, present my skills, and showcase my academic projects."
          tech="React · Tailwind CSS · JavaScript"
          link="https://github.com/"
        />
      </div>
    </section>
  )
}

export default ProjectsSection