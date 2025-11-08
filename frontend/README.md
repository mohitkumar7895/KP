# KP Manpower Services - Professional Recruitment Website

A modern, feature-rich manpower recruitment and workforce management website built with Next.js 13, TypeScript, and Supabase.

## Features

### Core Functionality
- **Dynamic Service Listings** - Fetch and display services from Supabase database
- **Job Postings Management** - Real-time job listings with filtering
- **Contact Form** - Integrated inquiry system with database storage
- **Testimonials Section** - Client reviews and ratings
- **Responsive Design** - Mobile-first approach with smooth animations
- **SEO Optimized** - Proper meta tags and semantic HTML

### Technical Highlights
- **Next.js 13** with App Router
- **TypeScript** for type safety
- **Supabase** backend with Row Level Security
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Lucide Icons** for beautiful icons
- **Smooth animations** and transitions

## Database Schema

The application uses Supabase with the following tables:

1. **services** - Service offerings with icons and descriptions
2. **job_postings** - Current job openings
3. **contact_inquiries** - Contact form submissions
4. **testimonials** - Client testimonials and reviews
5. **gallery_images** - Photo gallery (future feature)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase account (already configured)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Environment variables are already configured in `.env`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Start production server:
```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Services.tsx    # Services showcase
│   │   ├── Stats.tsx       # Statistics counter
│   │   ├── Jobs.tsx        # Job listings
│   │   ├── Testimonials.tsx # Client reviews
│   │   └── Contact.tsx     # Contact form
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── supabase.ts         # Supabase client & types
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Key Features Explained

### Services Section
- Fetches active services from Supabase
- Displays with custom icons using Lucide React
- Smooth hover animations and color coding

### Job Postings
- Real-time data from database
- Filterable by location, type, experience
- Application flow through contact form

### Contact Form
- Form validation
- Direct submission to Supabase
- Toast notifications for feedback
- Multiple inquiry types (job seeker, employer, general)

### Testimonials
- Star ratings system
- Featured testimonials display
- Client information with company details

### Statistics Counter
- Animated number counting on scroll
- Intersection Observer for trigger
- Smooth animation effects

## Design Philosophy

### Color Scheme
- **Primary**: Blue gradient (professional, trustworthy)
- **Accents**: Green, Orange, Purple (for variety)
- **Neutral**: Slate grays (modern, clean)

### Typography
- **Font**: Inter (clean, modern, readable)
- **Hierarchy**: Clear size and weight differences
- **Line Height**: 150% for body, 120% for headings

### Animations
- Fade-in on scroll
- Smooth transitions (300ms)
- Hover effects on all interactive elements
- Counter animations for statistics
- Floating elements for visual interest

## Customization

### Update Contact Information
Edit `components/layout/Footer.tsx` and `components/sections/Contact.tsx`

### Add New Services
Insert into Supabase `services` table with appropriate icon name from Lucide React

### Add Job Postings
Insert into Supabase `job_postings` table

### Modify Theme Colors
Edit `tailwind.config.ts` and component color classes

## Performance Optimizations

- Static generation for faster loads
- Image optimization with Next.js
- Code splitting by route
- Lazy loading of components
- Optimized database queries with indexes

## Security

- Row Level Security (RLS) enabled on all tables
- Public read access for content
- Authenticated write access for admin
- Environment variables for sensitive data
- Input validation on forms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Proprietary - KP Manpower Services 2023-2025

## Support

For support, email info@manpower.com or call +91 9999118211
