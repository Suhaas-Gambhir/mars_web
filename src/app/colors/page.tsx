"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Moon, Palette } from "lucide-react"

interface ColorSwatch {
  name: string
  cssVar: string
  description: string
  category: string
}

const colorSwatches: ColorSwatch[] = [
  // Primary Colors
  { name: "Primary", cssVar: "--primary", description: "Main brand color", category: "Primary" },
  { name: "Primary Foreground", cssVar: "--primary-foreground", description: "Text on primary background", category: "Primary" },
  
  // Secondary Colors
  { name: "Secondary", cssVar: "--secondary", description: "Secondary brand color", category: "Secondary" },
  { name: "Secondary Foreground", cssVar: "--secondary-foreground", description: "Text on secondary background", category: "Secondary" },
  
  // Background Colors
  { name: "Background", cssVar: "--background", description: "Main background color", category: "Background" },
  { name: "Card", cssVar: "--card", description: "Card background color", category: "Background" },
  { name: "Popover", cssVar: "--popover", description: "Popover background color", category: "Background" },
  
  // Foreground Colors
  { name: "Foreground", cssVar: "--foreground", description: "Main text color", category: "Foreground" },
  { name: "Card Foreground", cssVar: "--card-foreground", description: "Text on card background", category: "Foreground" },
  { name: "Popover Foreground", cssVar: "--popover-foreground", description: "Text on popover background", category: "Foreground" },
  
  // Muted Colors
  { name: "Muted", cssVar: "--muted", description: "Muted background color", category: "Muted" },
  { name: "Muted Foreground", cssVar: "--muted-foreground", description: "Muted text color", category: "Muted" },
  
  // Accent Colors
  { name: "Accent", cssVar: "--accent", description: "Accent background color", category: "Accent" },
  { name: "Accent Foreground", cssVar: "--accent-foreground", description: "Text on accent background", category: "Accent" },
  
  // Destructive Colors
  { name: "Destructive", cssVar: "--destructive", description: "Error/danger color", category: "Destructive" },
  { name: "Destructive Foreground", cssVar: "--destructive-foreground", description: "Text on destructive background", category: "Destructive" },
  
  // Border & Input Colors
  { name: "Border", cssVar: "--border", description: "Border color", category: "Border" },
  { name: "Input", cssVar: "--input", description: "Input border color", category: "Border" },
  { name: "Ring", cssVar: "--ring", description: "Focus ring color", category: "Border" },
  
  // Chart Colors
  { name: "Chart 1", cssVar: "--chart-1", description: "First chart color", category: "Chart" },
  { name: "Chart 2", cssVar: "--chart-2", description: "Second chart color", category: "Chart" },
  
  // Text Colors
  { name: "White", cssVar: "--white", description: "Pure white color", category: "Text" },
  { name: "Black", cssVar: "--black", description: "Pure black color", category: "Text" },
]

const categories = ["Primary", "Secondary", "Background", "Foreground", "Muted", "Accent", "Destructive", "Border", "Chart", "Text"]

// Convert HSL string (e.g. "0 100% 42%") to HEX
function hslToHex(hsl: string): string {
  // Parse HSL values
  const match = hsl.match(/([\d.]+)\s*([\d.]+)%\s*([\d.]+)%/)
  if (!match) return "#000000"
  const [, h, s, l] = match
  const H = parseFloat(h)
  const S = parseFloat(s) / 100
  const L = parseFloat(l) / 100

  const C = (1 - Math.abs(2 * L - 1)) * S
  const X = C * (1 - Math.abs(((H / 60) % 2) - 1))
  const m = L - C / 2
  let r = 0, g = 0, b = 0

  if (0 <= H && H < 60) {
    r = C; g = X; b = 0
  } else if (60 <= H && H < 120) {
    r = X; g = C; b = 0
  } else if (120 <= H && H < 180) {
    r = 0; g = C; b = X
  } else if (180 <= H && H < 240) {
    r = 0; g = X; b = C
  } else if (240 <= H && H < 300) {
    r = X; g = 0; b = C
  } else if (300 <= H && H < 360) {
    r = C; g = 0; b = X
  }

  const R = Math.round((r + m) * 255)
  const G = Math.round((g + m) * 255)
  const B = Math.round((b + m) * 255)

  return (
    "#" +
    R.toString(16).padStart(2, "0") +
    G.toString(16).padStart(2, "0") +
    B.toString(16).padStart(2, "0")
  ).toUpperCase()
}

export default function ColorsPage() {
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Check if dark mode is currently active
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const getComputedColor = (cssVar: string) => {
    if (typeof window === 'undefined') return "0 0% 0%"
    const root = document.documentElement
    const computedStyle = getComputedStyle(root)
    return computedStyle.getPropertyValue(cssVar).trim()
  }

  const getHSLValues = (cssVar: string) => {
    if (!isMounted) return "0 0% 0%"
    const color = getComputedColor(cssVar)
    if (color) {
      return color
    }
    return "0 0% 0%" // fallback
  }

  if (!isMounted) {
    return (
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-4"></div>
            <div className="h-4 bg-muted rounded mb-8"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Palette className="w-6 h-6 text-primary" />
          <h1 className="text-3xl sm:text-4xl font-bold">Color Palette</h1>
        </div>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Preview all colors defined in your design system. Toggle between light and dark modes to see how colors adapt.
        </p>
        
        <Button onClick={toggleTheme} variant="outline" className="gap-2">
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          {isDark ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-6 text-center">{category} Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorSwatches
                .filter((swatch) => swatch.category === category)
                .map((swatch) => {
                  const hsl = getHSLValues(swatch.cssVar)
                  const hex = hslToHex(hsl)
                  return (
                    <Card key={swatch.name} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{swatch.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{swatch.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div 
                            className="w-full h-20 rounded-lg border"
                            style={{ 
                              backgroundColor: `hsl(${hsl})`,
                            }}
                          />
                          <div className="text-xs font-mono text-muted-foreground">
                            CSS: {swatch.cssVar}
                          </div>
                          <div className="text-xs font-mono text-muted-foreground">
                            HSL: {hsl}
                          </div>
                          <div className="text-xs font-mono text-muted-foreground">
                            HEX: {hex}
                          </div>
                        </div>
                        {/* Show how it looks with text */}
                        <div className="space-y-2">
                          <div 
                            className="p-3 rounded border"
                            style={{ 
                              backgroundColor: `hsl(${hsl})`,
                              color: swatch.name.includes('Foreground') 
                                ? `hsl(${getHSLValues(swatch.cssVar.replace('-foreground', ''))})`
                                : `hsl(${getHSLValues(swatch.cssVar.replace(swatch.cssVar, swatch.cssVar + '-foreground'))})`
                            }}
                          >
                            <span className="text-sm font-medium">Sample Text</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Usage Examples */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Usage Examples</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Button</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Primary Action</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Secondary Button</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">Secondary Action</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Destructive Button</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" className="w-full">Delete</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Text Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-foreground">Foreground text</p>
              <p className="text-muted-foreground">Muted text</p>
              <p className="text-primary">Primary text</p>
              <p className="text-destructive">Destructive text</p>
              <p className="text-white bg-gray-800 px-2 py-1 rounded">White text</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Backgrounds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="p-2 bg-background border rounded">Background</div>
              <div className="p-2 bg-muted border rounded">Muted</div>
              <div className="p-2 bg-accent border rounded">Accent</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 