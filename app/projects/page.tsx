'use client';

import { useState, useEffect } from 'react';
import { Project, allProjects } from '@/.contentlayer/generated';
import Link from 'next/link';
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
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
    );
  }, [filter]);

  return (
    <>
      <FilterSelect filter={filter} setFilter={setFilter} />
      {orderedProjects.map((project) => (
        <>
          <article key={project._id} className="my-12">
            <div className="flex justify-between">
              {/* TODO: add links back in once ready */}
              {/* <Link href={project.slug}> */}
              <h2 className="m-0">{project.title}</h2>
              {/* </Link> */}
              {/* <Badge badgeColor={tagToColor(project.projectType)}>
              {project.projectType}
            </Badge> */}
              <span>{format(new Date(project.date), 'MM/yyyy')}</span>
            </div>
            {project.description && <p>{project.description}</p>}
            {project.keyWords && <BadgeCollection badges={project.keyWords} />}
          </article>
          <hr />
        </>
      ))}
    </>
  );
}
