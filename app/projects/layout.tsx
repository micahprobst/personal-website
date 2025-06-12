import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Projects',
    description: "A list of projects I've worked on or am working on.",
  };
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prose dark:prose-invert max-w-none relative z-10 bg-transparent">{children}</div>;
}
