import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalDetails } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-brand-cardDark/50 border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Column: Personal info & copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {personalDetails.name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
              {personalDetails.degree} &bull; {personalDetails.university}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
              &copy; {new Date().getFullYear()} {personalDetails.name}. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile Placeholder"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-cyan dark:hover:text-brand-cyan hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile Placeholder"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-cyan dark:hover:text-brand-cyan hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalDetails.socials.email}`}
              aria-label="Send Email Placeholder"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-cyan dark:hover:text-brand-cyan hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <FiMail className="w-5 h-5" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-4 p-2.5 rounded-lg bg-brand-primary/10 dark:bg-brand-cyan/10 text-brand-primary dark:text-brand-cyan hover:bg-brand-primary hover:text-white dark:hover:bg-brand-cyan dark:hover:text-slate-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <FiArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
