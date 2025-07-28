# Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.6.2-pink?style=flat-square&logo=framer)](https://www.framer.com/motion/)

A modern, responsive portfolio website built with Next.js 14, featuring smooth animations, dynamic content, and a professional design. This portfolio showcases various projects, skills, and services with an emphasis on user experience and performance.

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with dark theme
- **📱 Fully Responsive**: Optimized for all device sizes
- **⚡ Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **🎭 Smooth Animations**: Powered by Framer Motion and GSAP
- **🔧 Dynamic Components**: Modular component architecture
- **📄 CV Download**: Integrated CV download functionality
- **💬 WhatsApp Integration**: Direct contact through WhatsApp
- **🎯 SEO Optimized**: Built-in SEO best practices

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Heroicons, Lucide React, React Icons
- **Image Optimization**: Next.js Image component

### Development Tools
- **Package Manager**: PNPM
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **CSS Processing**: PostCSS, Autoprefixer

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js 18.17 or later
- PNPM (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── Stack.tsx          # Technology stack
│   ├── Services.tsx       # Services offered
│   ├── Portfolio.tsx      # Project showcase
│   ├── Footer.tsx         # Footer with contact info
│   ├── WhatApp.tsx        # WhatsApp integration
│   └── cv.tsx             # CV download component
├── constants/             # Application constants
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── projects/          # Project images
│   └── ...
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 Key Components

- **Navbar**: Responsive navigation with smooth scrolling
- **Hero**: Dynamic hero section with animated elements
- **Stack**: Technology stack showcase with icons
- **Services**: Professional services offered
- **Portfolio**: Project gallery with live demos
- **Footer**: Contact information and social links
- **WhatsApp**: Floating WhatsApp contact button

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 🎨 Customization

### Adding New Projects

1. Add project images to `/public/projects/`
2. Update the projects array in `components/Hero.tsx`
3. Include project details in the portfolio section

### Modifying Styles

- **Colors**: Update `tailwind.config.js` for theme colors
- **Fonts**: Modify font settings in `app/layout.tsx`
- **Animations**: Customize animations in component files

### Content Updates

- **Personal Info**: Update constants in `/constants/index.ts`
- **CV**: Replace CV file in `/public/` directory
- **Images**: Update profile and project images in `/public/`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📟 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## ⚡ Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with dynamic imports
- **SSR/SSG**: Server-side rendering and static generation
- **Bundle Optimization**: Optimized bundle size with tree shaking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

```bash
# Build the application
pnpm build

# The output will be in the `.next` folder
# Deploy the contents to your hosting provider
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or suggestions, feel free to reach out through the contact form on the website or via the integrated WhatsApp feature.

---

**Built with ❤️ using Next.js and modern web technologies**
