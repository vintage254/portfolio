export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  download?: string;
  tech: string[];
  category: string;
  isDownloadable?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Tuji Beads E-Commerce',
    description: 'A Next.js e-commerce platform featuring user authentication, product catalog, shopping cart, and email notifications.',
    image: '/projects/project1.png',
    github: 'https://github.com/vintage254/tuji-beads.git',
    demo: 'https://tuji-beads.vercel.app/',
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "React Hook Form", "Framer Motion", "Lucide Icons"],
    category: 'E-commerce'
  },
  {
    title: 'Job Listing Platform',
    description: 'A full-stack job listing application with user authentication, job search, and application tracking features.',
    image: '/projects/project2.jpg',
    github: 'https://github.com/vintage254/job-listing.git',
    demo: 'https://keajiralink.co.ke/',
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Zod", "React Hook Form", "ShadCN/UI", "Lucide Icons", "Vercel"],
    category: 'Platform'
  },
  {
    title: 'Food Ordering App',
    description: 'A food delivery platform with restaurant listings, menu management, and order tracking system.',
    image: '/projects/project3.png',
    github: 'https://github.com/sambutracy/food-ordering-app.git',
    demo: 'https://food-ordering-app-frontend-rkad.onrender.com/',
    tech: ["React", "Tailwind CSS", "TypeScript", "Redux Toolkit", "Firebase", "Framer Motion", "React Router", "Vite", "React Icons"],
    category: 'Mobile App'
  },
  {
    title: 'grammarwise',
    description: 'Grammerwise is a tutoring platform that connects English learners with expert tutors through job listings, application management, and structured verification workflows.',
    image: '/projects/project6.png',
    github: 'https://github.com/vintage254/grammerwise',
    demo: 'https://grammerwise.vercel.app/',
    tech: ["Next.js","TypeScript","Tailwind CSS","ShadCN/UI","Lucide Icons","Redux Toolkit","NextAuth.js","Prisma","PostgreSQL","ImageKit","Resend"],
    category: 'Education'
  },
  {
    title: 'Malbrose POS',
    description: 'A Flutter windows Point Of Sale system for managing retail shops with a beautiful UI and real-time updates.',
    image: '/projects/project4.jpeg',
    github: 'https://github.com/vintage254/malbrose-flutter-app.git',
    download: '/Malbrose%20POS.exe',
    tech: ["Flutter", "Dart", "Firebase", "Provider", "Google Fonts", "Cloud Firestore", "Android SDK","postgress sql"],
    isDownloadable: true,
    category: 'Desktop App'
  },
  {
    title: 'morethancode',
    description: 'More Than Code Labs is my digital space where I showcase who I am as a developer, designer, and creative problem solver.',
    image: '/projects/project7.png',
    github: 'https://github.com/vintage254/morethancode_labs.git',
    demo: 'https://morethancode-labs.vercel.app/',
    tech: ["React", "React DOM", "Vite", "Three.js", "@react-three/fiber", "@react-three/drei", "three-stdlib", "maath", "cobe", "Tailwind CSS", "Framer Motion", "motion", "clsx", "react-responsive", "Lucide React", "ESLint"],
    category: 'Portfolio'
  },
  {
    title: 'Project Management App',
    description: 'A collaborative project management tool with task tracking, team management, and real-time updates.',
    image: '/projects/project5.png',
    github: 'https://github.com/vintage254/project-management-app.git',
    demo: 'https://synccraft.up.railway.app/',
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "Framer Motion", "React Hook Form", "ShadCN/UI", "Prisma", "PostgreSQL", "NextAuth.js", "Vercel"],
    category: 'SaaS'
  },
  {
    title: 'Kwa Jose Cocktail Bar',
    description: 'A modern cocktail bar website featuring premium drink menus, elegant design, and customer reviews. Built with responsive design and smooth animations.',
    image: '/projects/project8.png',
    github: 'https://github.com/vintage254/kwa-jose.git',
    demo: 'https://kwa-jose.vercel.app/',
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "Vercel"],
    category: 'Restaurant'
  },
  {
    title: 'Belle Fashion Wear',
    description: 'An elegant fashion e-commerce platform showcasing trendy clothing collections with modern UI/UX design and seamless shopping experience.',
    image: '/projects/project9.png',
    github: 'https://github.com/vintage254/bellefashonwear.git',
    demo: 'https://bellefashonwear.vercel.app/',
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "E-commerce", "Responsive Design"],
    category: 'E-commerce'
  },
  {
    title: 'Nail Bar Studio',
    description: 'A professional nail salon website with appointment booking system, service showcase, and gallery. Features modern design and user-friendly interface.',
    image: '/projects/project10.png',
    github: 'https://github.com/vintage254/nailbar.git',
    demo: 'https://nailbar.vercel.app/',
    tech: ["Next.js", "React", "Tailwind CSS", "Booking System", "Gallery", "Responsive"],
    category: 'Beauty & Wellness'
  },
  {
    title: 'Sir Alex Tattoos',
    description: 'A creative tattoo studio website showcasing artist portfolio, tattoo galleries, and booking appointments. Features dark theme design and image galleries.',
    image: '/projects/project11.png',
    github: 'https://github.com/vintage254/siralextattoos.git',
    demo: 'https://siralextattoos.vercel.app/',
    tech: ["React", "Next.js", "Tailwind CSS", "Image Gallery", "Portfolio", "Dark Theme"],
    category: 'Portfolio'
  },
  {
    title: 'Bliss N Blush Beauty',
    description: 'A luxury beauty salon website offering comprehensive beauty services including nails, lashes, and spa treatments. Features elegant design and service booking.',
    image: '/projects/project12.png',
    github: 'https://github.com/vintage254/bliss-n-blush.git',
    demo: 'https://bliss-n-blush.vercel.app/',
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Booking System", "Beauty Services", "Luxury Design"],
    category: 'Beauty & Wellness'
  },
  {
    title: 'The Street Clothing',
    description: 'A trendy urban fashion store showcasing bold streetwear styles. Features a sleek design, product catalog, and responsive layout ideal for fashion-forward users.',
    image: '/projects/project13.png',
    github: 'https://github.com/vintage254/the-street-clothing.git',
    demo: 'https://the-street-clothing.vercel.app/',
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design", "Streetwear", "Modern UI"],
    category: 'Fashion & Apparel'
  }
];