import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { experienceItems } from '../../data/portfolioData';


export const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'Freelance':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'Volunteer':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'Open-Source':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-brand-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Work & Contributions"
          title="Experience"
          subtitle="Structured timeline for software engineering internships, freelance projects, volunteer work, and open-source contributions."
        />


        {/* Experience Timeline */}
        <div className="space-y-6">
          {experienceItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:border-brand-cyan/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${getTypeBadge(item.type)}`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-brand-primary dark:text-brand-cyan mt-0.5">
                    {item.organization}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-md bg-white dark:bg-slate-800 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 mb-4">
                {item.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="text-brand-cyan font-bold mt-0.5">&bull;</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack used */}
              {item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
