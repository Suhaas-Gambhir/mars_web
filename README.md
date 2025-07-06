# MARS - Macquarie Aerospace Rover Society

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

Official website for the Macquarie Aerospace Rover Society (MARS), built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- **Event Management**: Real-time Google Calendar integration for upcoming events
- **Blog System**: MDX-based blog with dynamic routing and rich content
- **Contact Forms**: Interactive contact and sponsorship inquiry forms
- **Join Us**: Embedded Google Forms for member applications
- **Responsive Design**: Mobile-first design with dark/light theme support

### UI/UX Features
- **Theme Toggle**: Dark and light mode with system preference detection
- **Upcoming Events Banner**: Persistent notification banner for upcoming events
- **Social Media Integration**: Direct links to social platforms
- **Modern Components**: Built with Radix UI primitives and custom styling
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### Technical Features
- **Next.js 15 App Router**: Latest Next.js features with App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **MDX Support**: Rich content with Markdown and React components
- **Google Calendar API**: Real-time event fetching and display
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Macquarie-Aerospace-Rover-Society/mars-web.git
   cd mars-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key
   GOOGLE_CALENDAR_ID=your_calendar_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
mars-web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── blog/              # Blog pages
│   │   ├── contact/           # Contact page
│   │   ├── events/            # Events page
│   │   ├── join/              # Join us page
│   │   └── sponsors/          # Sponsors page
│   ├── components/            # React components
│   │   ├── features/          # Feature-specific components
│   │   ├── layout/            # Layout components
│   │   ├── theme/             # Theme components
│   │   └── ui/                # Reusable UI components
│   ├── content/               # MDX content
│   │   └── blog/              # Blog posts
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility libraries
│       ├── utils/             # Utility functions
│       └── google-calendar.ts # Google Calendar integration
├── public/                    # Static assets
└── tailwind.config.ts         # Tailwind configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design System

The project uses a custom design system built with Tailwind CSS and CSS custom properties:

### Colors
- **Primary**: Red (#D70000) - MARS brand color
- **Secondary**: Gray (#787878) - Supporting text
- **Background**: White/Black - Theme-aware backgrounds
- **Accent**: Light gray - Subtle highlights

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Display**: Swap for optimal loading

### Components
- **Buttons**: Multiple variants (default, secondary, ghost, destructive)
- **Cards**: Consistent card layouts with headers and content
- **Forms**: Input, textarea, and label components
- **Navigation**: Header with mobile-responsive menu

## Google Calendar Integration

The website integrates with Google Calendar API to display upcoming events:

### Setup
1. Create a Google Cloud Project
2. Enable Google Calendar API
3. Create API credentials
4. Add calendar ID and API key to environment variables

### Features
- Real-time event fetching
- Event categorization (next week, upcoming)
- Persistent banner notifications
- Calendar URL generation for easy sharing

## Blog System

The blog uses MDX for rich content creation:

### Features
- Dynamic routing with `[slug]` pages
- Frontmatter metadata support
- Syntax highlighting
- Responsive images
- SEO optimization

### Creating Posts
1. Add MDX files to `src/content/blog/`
2. Include frontmatter with title, date, description
3. Use Markdown syntax with React components

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Contributing
1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component reusability
- Add proper TypeScript types
- Include accessibility features
---
Built with ❤️ by the MARS team at Macquarie University
