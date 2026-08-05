import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectModal } from './ProjectModal';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { FiGithub, FiExternalLink, FiMaximize2, FiCpu, FiLayers } from 'react-icons/fi';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const flagship = projects.find((p) => p.isFlagship) || projects[0];
  const otherProjects = projects.filter((p) => p.id !== flagship.id);

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-brand-dark/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Engineering Work"
          title="Projects & Case Studies"
          subtitle="Selected systems, embedded applications, and software engineering projects with technical problem/solution breakdowns."
        />

        {/* Flagship Project Card */}
        {flagship && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 bg-white dark:bg-brand-cardDark border-2 border-brand-primary/30 dark:border-brand-cyan/30 rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden"
          >
            {/* Flagship Accent Banner */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-cyan to-brand-primary text-white text-[11px] font-mono font-extrabold uppercase px-4 py-1 rounded-bl-xl shadow-sm">
              Flagship Project
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-brand-cyan uppercase tracking-wider">
                    {flagship.role}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                  <span className="font-mono text-xs text-slate-500">Case Study</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  {flagship.title}
                </h3>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-300 font-medium">
                  {flagship.summary}
                </p>

                {/* Problem & Solution Snippets */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                    <h4 className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300 uppercase mb-1 flex items-center gap-1.5">
                      <FiCpu className="text-red-500" /> Problem
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">
                      {flagship.problem}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                    <h4 className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300 uppercase mb-1 flex items-center gap-1.5">
                      <FiLayers className="text-emerald-500" /> Solution
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">
                      {flagship.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {flagship.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setSelectedProject(flagship)}
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-medium text-sm shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <FiMaximize2 className="w-4 h-4" />
                  <span>Read Full Case Study</span>
                </button>
                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <a
                    href={flagship.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-medium border border-slate-700 hover:bg-slate-800 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  {flagship.liveDemoUrl && (
                    <a
                      href={flagship.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-brand-cardDark text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:border-brand-cyan/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span>{project.role}</span>
                  <span className="text-brand-cyan">Project #{idx + 2}</span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-brand-primary dark:group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Features Preview */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1">
                        <span className="text-brand-cyan">&bull;</span>
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-brand-primary dark:text-brand-cyan hover:underline inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
                  >
                    <span>View Details</span>
                    <FiMaximize2 className="w-3 h-3" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo for ${project.title}`}
                      className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        className="p-1.5 rounded text-slate-500 hover:text-brand-cyan transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
