import { GitlabIcon as Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Introduction() {
  return (
    <section className="mb-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:pr-8">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">David Avila</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-4">Full Stack Developer</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Passionate about creating elegant, efficient, and user-friendly web applications. With 5 years of experience in both front-end, back-end development, and the tech industry. I specialize in building full-stack applications using modern technologies.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Jaydmart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/david-x-avila-g/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:david.avila@jaydmart.com"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail />
            </a>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <Image
            src="/images/david.jpg"
            alt="David Avila"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  )
}