import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { personalDetails } from '../../data/portfolioData';
import { FiCpu, FiCode, FiAward, FiTarget } from 'react-icons/fi';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const highlights = [
    {
      icon: FiCpu,
      title: 'Core Specializations',
      description: 'Artificial Intelligence, Computer Vision, Embedded Systems, Digital Hardware Design & Full-Stack Development',
    },
    {
      icon: FiCode,
      title: 'Technical Foundation',
      description: 'Data Structures & Algorithms, Machine Learning, Operating Systems, Computer Architecture & Software Principles',
    },
    {
      icon: FiAward,
      title: 'Engineering Approach',
      description: 'Designing Efficient Systems, Writing Clean & Maintainable Code, and Continuous Skill Growth',
    },
    {
      icon: FiTarget,
      title: 'Target Opportunities',
      description: 'Seeking Software Engineering & Computer Engineering Internship and Graduate Roles',
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
          {/* Main Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider font-semibold">
                  Engineering Biography
                </span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {personalDetails.location} &bull; Candidate
                </span>
              </div>
              
              <div className="space-y-3.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0 mt-2" />
                  <p>
                    <strong className="text-slate-900 dark:text-slate-50 font-bold">Computer Engineering Undergraduate</strong> at the{' '}
                    <strong className="text-slate-900 dark:text-slate-50 font-bold">University of Ruhuna</strong>, passionate about building innovative solutions through software and hardware technologies.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0 mt-2" />
                  <p>
                    Interested in{' '}
                    <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                      Artificial Intelligence, Computer Vision, Embedded Systems, Digital Hardware Design, and Full-Stack Software Development
                    </strong>.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0 mt-2" />
                  <p>
                    Strong foundation in{' '}
                    <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                      Data Structures & Algorithms, Machine Learning, Operating Systems, Computer Architecture, and Software Engineering principles
                    </strong>.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0 mt-2" />
                  <p>
                    Enjoy solving complex engineering problems by designing efficient systems, writing clean and maintainable code, and continuously improving technical skills.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0 mt-2" />
                  <p>
                    Currently exploring emerging technologies and seeking{' '}
                    <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                      Software Engineering / Computer Engineering internship and graduate opportunities
                    </strong>{' '}
                    to contribute, learn, and grow as an engineer.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stat Metrics */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="block font-mono font-bold text-base sm:text-lg text-brand-primary dark:text-brand-cyan">
                  B.Sc.Eng. (Hons)
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Computer Engineering
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                  {personalDetails.expectedGraduation}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Expected Grad
                </span>
              </div>
              <div>
                <span className="block font-mono font-bold text-base sm:text-lg text-emerald-600 dark:text-emerald-400">
                  3.4 / 4.0
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Cumulative GPA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-brand-primary/10 dark:bg-brand-cyan/10 text-brand-primary dark:text-brand-cyan shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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
