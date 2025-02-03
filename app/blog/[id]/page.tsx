"use client"

import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ThemeToggle from "../../components/ThemeToggle"
import BackgroundToggle from "../../context/BackgroundToggle"
import { useBackground } from "../../context/BackgroundContext"
import { motion } from "framer-motion"

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
  imageUrl: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a powerful React framework that makes it wasy to build server-side rendered and statically generate web applications. In this post, we'll explore the basics of Next.js and how to get started with your first project.\n\nFirst, let's look at why you might want to use Next.js. It offers several advantages over the standard React application:\n\n1. Server-side rendering out the box\n2. Automatic code splutting for faster page loads\n3. Simple page-based routing\n4. API routes to build your API alongside your app\n5. Easy deplyment with Vercel\n\nTo get started with Next.js, you'll need to have Node.js installed on your machine. Then, you can create a new Next.js app using the following command:\n\n```\nnpx create-next-app@latest my-next-app\n```\n\nThis will set up a new Next-js project with all the necessary configurations. Once the installation is complete, you can navigate to your project directory and start the development server:\n\n```\ncd my-next-app\npm run dev\n```\n\nYour Next.js application will now be running on `http:localhost:3000`.From here, you can start building your pages in the `pages` directory and your components in a `components` directory. \n\nNext.js makes it easy to create both static and dynamic pages. For example, to create a static page, you can simply create a new file in the `pages` directory:\n\n```jsx\n// pages/about.js\nexport defaul function About() {\n return <h1>About Us</h1>\n}\n```\n\nFor dynamic pages, you can use brackets in the filename to create dynamic routes:\n\n```jsxn\n// pages/posts/[id].js\nimport { useRouter } from 'next/router'\n\nexport default function Post() {\n  const router = use Router()\n  const { id } = router.query\n\n  return <p>Post: {id}</p>\n\n```\n\nThis is just scratching the surface of what's possible with Next.js. As you continue to explore, you'll discover many more features that make it a powerful tool for building modern web applications.",
    date: "January 18, 2025",
    imageUrl: "/placeholder.svg?height=400&width=800",
  }
]
