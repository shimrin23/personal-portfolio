import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { personalDetails } from '../../data/portfolioData';
import { FiBookOpen, FiCpu, FiCode, FiAward } from 'react-icons/fi';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const highlights = [
    {
      icon: FiCpu,
      title: 'Systems & Hardware',
      description: 'Computer Architecture, Embedded Systems, RISC-V, Operating Systems',
    },
    {
      icon: FiCode,
      title: 'Software Engineering',
      description: 'Data Structures, C++, Python, TypeScript, Full-Stack Architecture',
    },
    {
      icon: FiBookOpen,
      title: 'Academic Standing',
      description: personalDetails.degree + ' @ ' + personalDetails.university,
    },
    {
      icon: FiAward,
      title: 'Career Target',
      description: 'Software Engineering & Systems Internships / Graduate Positions',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-brand-dark/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Background & Objectives"
          title="About Me"
          subtitle="A summary of my engineering foundation, interests, and career aspirations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider font-semibold">
                  Engineering Biography
                </span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {personalDetails.location} &bull; Candidate
                </span>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {personalDetails.shortBio}
              </p>
            </div>

            {/* Quick Metrics / Key Strengths */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="block font-mono font-bold text-xl sm:text-2xl text-brand-primary dark:text-brand-cyan">
                  CE
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Degree Major
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-xl sm:text-2xl text-slate-900 dark:text-slate-100">
                  {personalDetails.expectedGraduation}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Graduation
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400">
                  C++ / TS
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Primary Stack
                </span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-brand-cyan/50 transition-colors flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-brand-primary/10 dark:bg-brand-cyan/10 text-brand-primary dark:text-brand-cyan shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
