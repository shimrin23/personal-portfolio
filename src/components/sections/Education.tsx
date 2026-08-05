import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { educationData } from '../../data/portfolioData';
import { FiBook, FiAward, FiCheckCircle, FiCpu } from 'react-icons/fi';

export const Education: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-brand-dark/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Academic Foundation"
          title="Education"
          subtitle="Degree candidate details, relevant computer engineering coursework, and capstone project highlight."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Degree Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-brand-primary/10 dark:bg-brand-cyan/10 text-brand-primary dark:text-brand-cyan">
                  <FiBook className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                    Higher Education
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                    {educationData.degree}
                  </h3>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
                  {educationData.institution}
                </p>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
                  <span>{educationData.graduationYear}</span>
                  <span>&bull;</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    GPA: {educationData.gpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Capstone Project Highlight if present */}
            {educationData.finalYearProject && (
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <FiCpu className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-slate-100 uppercase">
                    Final Year Capstone Project
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {educationData.finalYearProject.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {educationData.finalYearProject.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {educationData.finalYearProject.technologies.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Additional Education / Diplomas */}
            {educationData.additionalEducation && educationData.additionalEducation.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
                  Additional Academic Diplomas & Qualifications
                </span>
                {educationData.additionalEducation.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {edu.degree}
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-brand-primary dark:text-brand-cyan">
                      {edu.institution}
                    </p>
                    {edu.description && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Relevant Coursework Grid */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <FiAward className="w-5 h-5 text-brand-cyan" />
                  Relevant Coursework
                </h3>
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  {educationData.relevantCoursework.length} Subjects Studied
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Undergraduate coursework establishing rigorous theoretical and hands-on computer engineering proficiency:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[520px] overflow-y-auto pr-1">
                {educationData.relevantCoursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 flex items-center gap-2.5 hover:border-brand-cyan/40 transition-colors"
                  >
                    <FiCheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
