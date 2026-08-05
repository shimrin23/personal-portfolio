import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { achievementItems } from '../../data/portfolioData';
import { FiZap, FiBookOpen, FiUsers, FiStar } from 'react-icons/fi';

export const Achievements: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Hackathon':
        return <FiZap className="w-5 h-5 text-amber-500" />;
      case 'Scholarship':
        return <FiBookOpen className="w-5 h-5 text-blue-500" />;
      case 'Leadership':
        return <FiUsers className="w-5 h-5 text-purple-500" />;
      default:
        return <FiStar className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-slate-50/50 dark:bg-brand-dark/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Honors & Leadership"
          title="Achievements & Recognition"
          subtitle="Hackathon wins, competitive programming distinctions, academic scholarships, and leadership roles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:border-brand-cyan/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.year}
                  </span>
                </div>

                <span className="text-xs font-mono font-semibold text-brand-cyan uppercase tracking-wider block mb-1">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {item.organization}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
