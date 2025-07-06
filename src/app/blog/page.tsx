import { getMDXPosts } from "@/lib/mdx"
import { BlogCard } from "@/components/features/blog-card"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await getMDXPosts()

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest insights, tutorials, and industry trends from expert writers and thought leaders.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <BlogCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  )
} 