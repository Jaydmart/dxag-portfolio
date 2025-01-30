const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PHP",
  "Python",
  "Django",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "GraphQL",
  "Tailwind CSS",
  "Bootstrap",
  "Docker",
]

export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
