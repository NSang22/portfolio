# AI Coding Agent Instructions for 3D Portfolio Starter

## Architecture Overview
This is a Next.js 15 app with React 19 and TypeScript, featuring a 3D portfolio website. The app uses App Router with client-side components for interactive elements.

- **Main Structure**: `src/app/page.tsx` renders sections: Navbar, Hero (with 3D scene), Projects, Contact, Footer, Sound toggle
- **3D Rendering**: React Three Fiber (`@react-three/fiber`) with Drei helpers for 3D models and controls
- **Styling**: Tailwind CSS v4 with custom cyan (#04D9FF) accent color on black background
- **Animations**: Framer Motion for page transitions and scroll reveals

## Key Components
- **Hero** (`src/components/hero.tsx`): Split layout with animated text (left) and 3D model (right)
- **Scene** (`src/components/scene.tsx`): Canvas setup with camera, lighting, and OrbitControls (zoom disabled)
- **Model** (`src/components/model.tsx`): Loads GLTF from `public/models/`, continuous Y-rotation, scaled/positioned
- **Contact** (`src/components/contact.tsx`): Form with EmailJS placeholder (currently alerts only)
- **Sound** (`src/components/sound.tsx`): Modal for background music toggle using HTML audio

## 3D Setup Patterns
- Use `dynamic` import with `{ ssr: false }` for Model component to avoid SSR issues
- Camera position: `[7, 2, 8]` with fov 50 for standard view
- Lighting: Ambient (0.5) + Directional (position `[5,5,5]`, intensity 2)
- OrbitControls: `enableZoom={false}` for consistent UX
- Model adjustments: Scale ~2.2, position `[-1, -0.5, -2]`, rotation `[0, Math.PI/2, 0]`

## Styling Conventions
- Color scheme: `bg-black text-white` with `text-[#04D9FF]` accents
- Responsive: `md:` breakpoints for desktop layouts
- Animations: Framer Motion with `initial/animate/transition` objects
- Buttons: Cyan background/outlined variants with hover transitions

## Development Workflow
- **Dev**: `npm run dev --turbopack` (enables faster builds)
- **Build**: `npm run build --turbopack`
- **Lint**: `npm run lint` (ESLint with Next.js config)
- Edit `src/app/page.tsx` for main content, customize hero text/buttons
- Replace model in `public/models/` and update path in `model.tsx`
- Implement contact form submission (EmailJS integration pending)

## Integration Points
- **EmailJS**: Import `@emailjs/browser` for contact form (service ID, template ID, public key needed)
- **Audio**: Background music in `public/audio/`, controlled via Sound component
- **Models**: GLTF files in `public/models/`, loaded via `useGLTF`

## Common Patterns
- Client components: `"use client"` for interactive features
- Refs: `useRef` for 3D objects and audio elements
- Suspense: Wrap Model in `<Suspense fallback={null}>` for loading
- ScrollReveal: Custom component for staggered animations on scroll