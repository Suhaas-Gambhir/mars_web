# Coming Soon Component

A reusable "Coming Soon" component for unfinished pages on the MARS website.

## Features

- Responsive design that matches the site's theme
- Animated rocket and clock icons
- Customizable title, description, and completion date
- Optional back button
- Progress indicator animation
- Decorative background elements
- Dark/light theme support

## Usage

### Basic Usage

```tsx
import { ComingSoon } from "@/components/features/coming-soon"

export default function MyUnfinishedPage() {
  return <ComingSoon />
}
```

### Custom Configuration

```tsx
import { ComingSoon } from "@/components/features/coming-soon"

export default function MyUnfinishedPage() {
  return (
    <ComingSoon 
      title="New Feature Coming Soon"
      description="We're building something amazing for our rover community. Stay tuned!"
      showBackButton={true}
      estimatedCompletion="March 2026"
    />
  )
}
```

### For Specific Sections

```tsx
import { ComingSoon } from "@/components/features/coming-soon"

export default function NewSectionPage() {
  return (
    <ComingSoon 
      title="Live Stream Hub"
      description="Watch our rover testing sessions and competition events in real-time."
      showBackButton={false}
      estimatedCompletion="Before ARC 2026"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Coming Soon"` | Main heading text |
| `description` | `string` | Default description | Explanation of what's coming |
| `showBackButton` | `boolean` | `true` | Whether to show "Back to Home" button |
| `estimatedCompletion` | `string` | `undefined` | Optional completion date/timeframe |

## Examples for Common Use Cases

### Project Documentation Page
```tsx
<ComingSoon 
  title="Project Documentation"
  description="Detailed technical documentation for our rover systems and development process."
  estimatedCompletion="Q1 2026"
/>
```

### Member Portal
```tsx
<ComingSoon 
  title="Member Portal"
  description="Exclusive access for MARS members to internal resources and collaboration tools."
  estimatedCompletion="Coming Soon"
/>
```

### Live Data Dashboard
```tsx
<ComingSoon 
  title="Rover Telemetry"
  description="Real-time data visualization from our rover sensors and systems."
  estimatedCompletion="Before Competition"
/>
```

## Customization

The component uses the site's design system and automatically adapts to dark/light themes. The colors, spacing, and typography match the rest of the MARS website.

## File Locations

- Component: `src/components/features/coming-soon.tsx`
- Example page: `src/app/coming-soon/page.tsx`
- Documentation: `docs/coming-soon.md`
