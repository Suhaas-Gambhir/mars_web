import { Calendar, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MDXPost } from "@/lib/mdx"

interface BlogCardProps {
  post: MDXPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs text-white">{post.category}</Badge>
          <span className="text-xs sm:text-sm text-muted-foreground">{post.readTime}</span>
        </div>
        <CardTitle className="text-lg sm:text-xl line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="text-sm sm:text-base line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 pt-0">
        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            {post.author.name}
          </div>
        </div>
        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          {new Date(post.publishedAt).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 