import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface MDXPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  image: string
}

export async function getMDXPosts(): Promise<MDXPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title,
          excerpt: data.excerpt,
          content,
          author: data.author,
          publishedAt: data.publishedAt,
          readTime: data.readTime,
          category: data.category,
          tags: data.tags,
          image: data.image,
        }
      })
  )

  return allPostsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export async function getMDXPost(slug: string): Promise<MDXPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      author: data.author,
      publishedAt: data.publishedAt,
      readTime: data.readTime,
      category: data.category,
      tags: data.tags,
      image: data.image,
    }
  } catch {
    return null
  }
}

export async function compileMDXContent(content: string) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true }
  })

  return compiledContent
} 