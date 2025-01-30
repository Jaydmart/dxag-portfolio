import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  imageUrl: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js, a powerful React framework.",
    date: "January 18, 2025",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    excerpt: "Discover tips and tricks to make the most out of Tailwind CSS in your projects.",
    date: "January 20, 2025",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "The Future of Web Development",
    excerpt: "Explore emerging trends and technologies shaping the future of web development.",
    date: "January 24, 2025",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

export default function Blog() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src={post.imageUrl || "placeholder.svg"}
              alt={post.title}
              width={300}
              height={200}
              className="w-full object-cover h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline dark:text-blue-400">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          View All Posts
        </Link>
      </div>
    </section>
  )
}
