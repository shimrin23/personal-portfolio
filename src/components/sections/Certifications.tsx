import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { certificationItems } from '../../data/portfolioData';
import { FiAward, FiExternalLink, FiPlusCircle } from 'react-icons/fi';

export const Certifications: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-brand-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Credentials & Training"
          title="Certifications"
          subtitle="Verified industry certifications, technical accreditations, and specialized software courses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationItems.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:border-brand-cyan/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-brand-primary/10 dark:bg-brand-cyan/10 text-brand-primary dark:text-brand-cyan shrink-0">
                    <FiAward className="w-5 h-5" />
                  </div>
                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-brand-primary dark:text-brand-cyan hover:underline"
                    >
                      <span>Verify Credential</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  {cert.issuer} &bull; {cert.date}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Additional Certifications Card */}
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-dashed border-slate-300 dark:border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <FiPlusCircle className="w-8 h-8 text-slate-400 dark:text-slate-600 mb-2" />
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
              Professional Certifications
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 max-w-xs">
              Continuous learning in AI systems, embedded microcontrollers, and modern full-stack engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
