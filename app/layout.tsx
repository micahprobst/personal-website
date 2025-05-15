import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { ModeToggle } from '@/components/mode-toggle';
import LogoLink from '@/components/ui/logo-link';
import ScrollButton from '@/components/ui/scroll-to-top-button';
import gitHubLogoLight from '@/public/github-mark.svg';
import gitHubLogoDark from '@/public/github-mark-white.svg';
import linkedinLogo from '@/public/linkedin-logo.svg';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Micah's Website",
  description: 'A personal website to showcase my work and projects.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollButton />
          <div className="min-h-screen max-w-2xl mx-auto pt-10 px-4 flex flex-col">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/resume">Resume</Link>
                  {/* Give reason why some projects don't include the github link */}
                  {/* context, tools used, skills learned, gallery */}
                  {/* sort by newest */}
                  <Link href="/projects">Projects</Link>
                  <Link href="/contact">Contact Me</Link>
                </nav>
              </div>
            </header>
            <main className="grow">{children}</main>
            <footer>
              <hr />
              <div className="flex justify-between py-4 text-sm">
                <LogoLink
                  href="https://linkedin.com/in/julian-bouchard"
                  logoLight={linkedinLogo}
                  logoDark={linkedinLogo}
                >
                  LinkedIn
                </LogoLink>
                <LogoLink href="https://gitfront.io/r/Bouchard/3fDHMhJpozRM/personal-website/">
                  source code
                </LogoLink>
                <LogoLink
                  href="https://github.com/JulianBouchard"
                  logoLight={gitHubLogoLight}
                  logoDark={gitHubLogoDark}
                >
                  GitHub
                </LogoLink>
              </div>
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
