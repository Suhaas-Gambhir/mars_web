import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "Mini Wally",
    description: "A scaled-down prototype designed to test and validate the integrated software and hardware systems.",
    image: "/mini-wally.png",
    category: "Prototype",
    status: "In Progress"
  }
];

export function ProjectsCard() {  
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-bl from-background/30 via-transparent to-primary/20" />
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 border rounded-2xl border-white/20 p-20 bg-gradient-to-bl from-background/10 via-transparent to-primary/20 dark:bg-gradient-to-bl dark:from-background/10 dark:via-transparent dark:to-primary/20">
          {/* Projects Content */}
          <div className="flex-1">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
                Projects
              </h2>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {projects.map((project) => (
                <Card key={project.id} className="bg-background/20 border-border/50 backdrop-blur-sm hover:bg-background/30 transition-colors">
                  <CardHeader className="pb-4 gap-2">
                    <div className="relative mb-4">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={600} 
                        height={600} 
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle className="text-3xl sm:text-4xl dark:text-white text-black line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3 text-xl">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          
          {/* See All Projects Button */}
          <div className="lg:flex-shrink-0">
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                See All
                <ArrowRight className="h-4 w-4 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 