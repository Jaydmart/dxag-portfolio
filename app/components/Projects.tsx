import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Platform"
    description: "A full-tack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/johndoe/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A React Native mobile app for managing daily tasks and schedules.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/johndoe/taskmanager",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard using OpenWeatherMap API and Vue.js.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/johndoe/weatherdashboard",
  },
]

export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 dar:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline dark:text-blue-400"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}