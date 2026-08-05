import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { certificationItems } from '../../data/portfolioData';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export const Certifications: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-brand-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Credentials & Training"
          title="Licenses & Certifications"
          subtitle="Verified industry certifications, global competition accomplishments, and specialized engineering courses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificationItems.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-50 dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-brand-primary/10 dark:bg-brand-cyan/10 text-brand-primary dark:text-brand-cyan shrink-0 group-hover:scale-105 transition-transform">
                    <FiAward className="w-5 h-5" />
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-brand-primary dark:text-brand-cyan border border-slate-200 dark:border-slate-700 hover:border-brand-cyan transition-colors"
                    >
                      <span>Show Credential</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-brand-cyan transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                  <span>&bull;</span>
                  <span>Issued {cert.date}</span>
                </div>

                {/* Credential ID badge if present */}
                {cert.credentialId && (
                  <div className="mt-2.5 inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300/60 dark:border-slate-700">
                    <span className="text-slate-400">Credential ID:</span> {cert.credentialId}
                  </div>
                )}

                {/* Skills Badges */}
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
        </div>
      </div>
    </section>
  );
};
