import { notFound } from 'next/navigation'
import { getMDXPost, compileMDXContent } from '@/lib/mdx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Calendar, User } from 'lucide-react'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getMDXPost(slug)

  if (!post) {
    notFound()
  }

  const content = await compileMDXContent(post.content)

  return (
    <div className="container py-12 sm:py-16 lg:py-20 px-4 sm:px-0">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-sm text-muted-foreground">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{post.title}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">{post.excerpt}</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="w-4 h-4 mr-1" />
                {post.author.name}
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </header>

        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          {content}
        </div>

        <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </footer>
      </article>
    </div>
  )
} 