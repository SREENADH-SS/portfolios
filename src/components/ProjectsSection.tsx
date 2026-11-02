import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#DCD9D1]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="SELECTED WORK / 01—03"
          title="Selected projects."
          description="A collection of full stack platforms and digital experiences engineered with Java, Spring Boot, React, and modular architecture."
        />

        <div className="mt-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
