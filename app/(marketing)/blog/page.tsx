import Image from "next/image"
import Link from "next/link"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = [
    {
      _id: "1",
      title: "Getting Started with Next.js",
      description: "Learn how to get started with Next.js.",
      date: new Date("2022-01-01"),
      slug: "/blog/getting-started",
      image: "/images/blog/getting-started.jpg",
    },
    {
      _id: "2",
      title: "Building a Blog with Next.js",
      description: "Learn how to build a blog using Next.js.",
      date: new Date("2022-01-02"),
      slug: "/blog/building-a-blog",
      image: "/images/blog/building-a-blog.jpg",
    },
    {
      _id: "3",
      title: "Deploying Next.js to Vercel",
      description: "Learn how to deploy a Next.js app to Vercel.",
      date: new Date("2022-01-03"),
      slug: "/blog/deploying-to-vercel",
      image: "/images/blog/deploying-to-vercel.jpg",
    },
  ]
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">123</p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
