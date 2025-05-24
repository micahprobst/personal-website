import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';

import { Metadata } from 'next';
import { Mdx } from '@/components/mdx-components';
import { BadgeCollection } from '@/components/ui/badge';
import { format } from 'date-fns';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    return null;
  }

  return project;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const project = await getPostFromParams(params);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const project = await getPostFromParams(params);

  if (!project) {
    notFound();
    return;
  }

  return (
    <article className="py-6 prose dark:prose-invert max-w-none">
      <div className="flex justify-between">
        <h1 className="font-medium text-3xl mb-0">{project.title}</h1>
        <span>{format(new Date(project.date), 'MM/yyyy')}</span>
      </div>
      {project.githubLink && (
        <p>
          GitHub{' '}
          <a
            href={project.githubLink}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            link
          </a>
        </p>
      )}
      {project.resultingPaper && (
        <p>
          Resulting Paper{' '}
          <a
            href={project.resultingPaper}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            link
          </a>
        </p>
      )}
      <hr className="my-6" />
      {project.keyWords && <BadgeCollection badges={project.keyWords} />}
      <hr className="my-6" />
      <Mdx code={project.body.code} />
    </article>
  );
}
