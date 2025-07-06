"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, X } from "lucide-react"

const mainColors = [
  { name: "Primary", cssVar: "--primary", class: "bg-primary" },
  { name: "Secondary", cssVar: "--secondary", class: "bg-secondary" },
  { name: "Background", cssVar: "--background", class: "bg-background border" },
  { name: "Foreground", cssVar: "--foreground", class: "bg-foreground" },
  { name: "Muted", cssVar: "--muted", class: "bg-muted border" },
  { name: "Accent", cssVar: "--accent", class: "bg-accent border" },
  { name: "Destructive", cssVar: "--destructive", class: "bg-destructive" },
  { name: "Border", cssVar: "--border", class: "bg-border border" },
  { name: "White", cssVar: "--white", class: "bg-white border" },
]

export function ColorPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-background/80 backdrop-blur border shadow-lg"
        aria-label="Color preview"
      >
        <Palette className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Color Reference</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {mainColors.map((color) => (
                  <div key={color.name} className="text-center space-y-2">
                    <div 
                      className={`w-full h-16 rounded-lg ${color.class}`}
                      title={`${color.name}: ${color.cssVar}`}
                    />
                    <div className="text-xs font-medium">{color.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {color.cssVar}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  Click on any color to see it in action. Visit{" "}
                  <a 
                    href="/colors" 
                    className="text-primary hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    /colors
                  </a>{" "}
                  for the full color palette.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
} 