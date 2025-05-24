# Micah Probst - Personal Website

A modern, responsive personal portfolio website showcasing my philosophy background, AI ethics research, and professional work. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **MDX Content**: Write content in Markdown with React component support
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Built with Next.js for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Contentlayer](https://contentlayer.dev/) for MDX processing
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/micahprobst/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Homepage
├── components/         # Reusable React components
│   └── ui/            # UI component library
├── content/           # MDX content files
│   ├── pages/         # Static pages (home, about, contact)
│   └── projects/      # Project case studies
├── lib/               # Utility functions
└── public/            # Static assets
```

## 📝 Content Management

Content is managed through MDX files in the `content/` directory:

- **Pages**: Located in `content/pages/` for static pages
- **Projects**: Located in `content/projects/` for project showcases

Each content file includes frontmatter for metadata:

```yaml
---
title: "Page Title"
description: "Page description for SEO"
date: "2024-01-01"
---
```

## 🎨 Customization

### Adding New Projects

1. Create a new `.mdx` file in `content/projects/`
2. Add frontmatter with title, description, date, and keywords
3. Write your content using Markdown and React components

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`:

- Colors
- Typography
- Spacing
- Breakpoints

## 📊 Analytics

The site includes Vercel Analytics for performance and visitor tracking. Analytics data helps optimize user experience and content strategy.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Import the project
3. Deploy with default settings
4. Your site will be live with automatic deployments on push

### Alternative Deployment

The site can be deployed to any platform that supports Node.js:

```bash
pnpm build
pnpm start
```

## 📜 Available Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm preview`: Build and start production server
- `pnpm lint`: Run ESLint

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:

1. Open an issue for bugs or suggestions
2. Submit a pull request for improvements
3. Share feedback on design or content

## 🙏 Acknowledgments

**Special thanks to [Julian Bouchard](https://github.com/JulianBouchard)** for creating the original website template and codebase that serves as the foundation for this site. The clean, modern design and technical architecture provided an excellent starting point for showcasing philosophy and AI ethics work.

While I've customized the content, styling, and functionality to reflect my own work and interests, the core structure and many design decisions originated from Julian's thoughtful implementation. This kind of open sharing of quality code makes the web development community stronger.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: micah.probst@colorado.edu
- **LinkedIn**: [Micah Probst](https://www.linkedin.com/in/micah-probst-b80009172/)
- **GitHub**: [MicahProbst](https://github.com/micahprobst)

---

Built with ❤️ by Micah Probst | Based on original template by Julian Bouchard | Powered by Next.js and Vercel
