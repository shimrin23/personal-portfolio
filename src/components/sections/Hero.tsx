import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiFileText, FiFolder, FiMail, FiGithub, FiLinkedin, FiTerminal } from 'react-icons/fi';
import { personalDetails } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 },
    }),
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 dark:bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Avatar Frame */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mb-6 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary via-brand-cyan to-indigo-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-tilt"></div>
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-brand-cardDark bg-slate-900 flex items-center justify-center shadow-2xl">
              <img
                src={personalDetails.avatarUrl || '/profile.jpg'}
                alt={personalDetails.name}
                className="w-full h-full object-cover object-[center_15%]"
                onError={(e) => {
                  // Fallback if profile image file is not yet dropped in public/
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    const fallbackEl = e.currentTarget.parentElement.querySelector('.avatar-fallback');
                    if (fallbackEl) fallbackEl.classList.remove('hidden');
                  }
                }}
              />
              <div className="avatar-fallback hidden w-full h-full bg-slate-900 flex flex-col items-center justify-center font-mono text-brand-cyan">
                <span className="font-extrabold text-2xl">SMS</span>
                <span className="text-[9px] text-slate-400">CompEng</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open for Software Engineering Internships & Full-Time Roles</span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50"
        >
          Hi, I&apos;m <span className="gradient-text">{personalDetails.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 font-sans"
        >
          {personalDetails.title}
        </motion.p>

        {/* University & Degree Subhead */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mt-2 text-sm sm:text-base font-mono text-brand-primary dark:text-brand-cyan"
        >
          {personalDetails.degree} &bull; {personalDetails.university} ({personalDetails.expectedGraduation})
        </motion.p>

        {/* Tagline / Introduction */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          {personalDetails.tagline}
        </motion.p>

        {/* Action Call to Action Buttons */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Resume Download Button */}
          <a
            href={personalDetails.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-medium text-sm shadow-lg shadow-brand-primary/25 hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <FiFileText className="w-4 h-4" />
            <span>Download Resume [PDF]</span>
          </a>

          {/* View Projects Button */}
          <button
            onClick={() => handleScrollTo('projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <FiFolder className="w-4 h-4 text-brand-cyan" />
            <span>View Projects</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={() => handleScrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-brand-cardDark hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <FiMail className="w-4 h-4" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Quick Social & System Badges */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mt-12 flex items-center justify-center gap-6 text-slate-500 dark:text-slate-400"
        >
          <a
            href={personalDetails.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile Placeholder"
            className="hover:text-brand-cyan transition-colors"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href={personalDetails.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile Placeholder"
            className="hover:text-brand-cyan transition-colors"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
          <span className="font-mono text-xs flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
            <FiTerminal className="w-3.5 h-3.5 text-brand-cyan" />
            C++ / Systems / Full-Stack
          </span>
        </motion.div>
      </div>
    </section>
  );
};
