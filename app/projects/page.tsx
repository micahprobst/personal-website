'use client';

import { useState, useEffect } from 'react';
import { Project, allProjects } from '@/.contentlayer/generated';
import { BadgeCollection } from '@/components/ui/badge';
import { format } from 'date-fns';
import FilterSelect from '@/components/ui/filter-select';

export default function Projects() {
  const [orderedProjects, setOrderedProjects] =
    useState<Project[]>(allProjects);
  const [filter, setFilter] = useState<string[]>([]);


  useEffect(() => {
    // filter by keywords
    const filteredProjects = allProjects.filter((project) => {
      // if no filter, return all
      if (filter.length === 0) {
        return true;
      }
      // if project doesn't have keywords, return false
      if (!project.keyWords) {
        return false;
      }
      return project.keyWords.some((keyWord) => filter.includes(keyWord));
    });

    // sort by date
    setOrderedProjects(
      filteredProjects.sort((a, b) => {
        // Handle WIP dates - put them at the top
        if (a.date === 'WIP' && b.date === 'WIP') return 0;
        if (a.date === 'WIP') return -1;
        if (b.date === 'WIP') return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
    );
  }, [filter]);

  return (
    <>
      <FilterSelect filter={filter} setFilter={setFilter} />
      {orderedProjects.map((project) => (
        <>
          <article key={project._id} className="my-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex justify-between">
              {/* TODO: add links back in once ready */}
              {/* <Link href={project.slug}> */}
              <h2 className="m-0">{project.title}</h2>
              {/* </Link> */}
              {/* <Badge badgeColor={tagToColor(project.projectType)}>
              {project.projectType}
            </Badge> */}
              <span>{project.date === 'WIP' ? 'WIP' : format(new Date(project.date), 'MM/yyyy')}</span>
            </div>
            {project.description && <p>{project.description}</p>}
            {project.projectType === 'Research' && (
              <p>
                <a
                  href={project.title === 'The Epistemic Vice of AI Sycophancy' ? '/ai-sycophancy-epistemic-vice copy.pdf' : 
                        project.title === 'Beyond Binary Understanding: LLMs as Catalysts for Philosophical Recalibration' ? '/beyond-binary-understanding copy.pdf' : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Read Paper (PDF)
                </a>
              </p>
            )}
            {project.keyWords && <BadgeCollection badges={project.keyWords} />}
          </article>
        </>
      ))}
    </>
  );
}
