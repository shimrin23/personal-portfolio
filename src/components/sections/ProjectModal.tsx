import React, { useEffect } from 'react';
import { FiX, FiGithub, FiExternalLink, FiCpu, FiCheckCircle, FiLayers } from 'react-icons/fi';
import { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 text-slate-900 dark:text-slate-100 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Header Badges */}
        <div className="flex items-center gap-2 mb-3">
          {project.isFlagship && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
              Flagship Case Study
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800">
            Role: {project.role}
          </span>
        </div>

        {/* Title */}
        <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {project.title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
          {project.summary}
        </p>

        {/* Action Links */}
        <div className="mt-4 flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-medium text-xs border border-slate-700 transition-colors"
          >
            <FiGithub className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-primary hover:bg-brand-primaryHover text-white font-medium text-xs shadow-sm transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>

        {/* Problem & Solution Breakdown */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20">
            <h3 className="font-semibold text-sm text-red-600 dark:text-red-400 flex items-center gap-2 mb-2">
              <FiCpu className="w-4 h-4" /> The Engineering Problem
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
            <h3 className="font-semibold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-2">
              <FiCheckCircle className="w-4 h-4" /> The Technical Solution
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
            <FiLayers className="w-4 h-4 text-brand-cyan" /> Key Technical Features
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                <span className="text-brand-cyan font-bold mt-0.5">&bull;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details if present */}
        {project.architectureDetails && project.architectureDetails.length > 0 && (
          <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-mono">
              System Architecture Details
            </h3>
            <ul className="space-y-1.5">
              {project.architectureDetails.map((detail, i) => (
                <li key={i} className="text-xs text-slate-700 dark:text-slate-300 font-mono">
                  &rsaquo; {detail}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Outcome / Metrics if present */}
        {project.metricsOrOutcome && (
          <div className="mt-4 p-3 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-medium">
            <strong>Outcome / Performance:</strong> {project.metricsOrOutcome}
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <span className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
            Technologies & Tools Used:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
