import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { personalDetails } from '../../data/portfolioData';
import { FiDownload, FiFileText, FiCheckCircle, FiExternalLink, FiCode, FiCpu, FiLayers, FiShield } from 'react-icons/fi';

export const Resume: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const resumeHighlights = [
    'Formatted for ATS (Applicant Tracking Systems) readability',
    'Verified contact details & GitHub repository links',
    'Categorized computer engineering coursework & technical skills',
    'Concise bullet points with metric-oriented project results',
  ];

  const getSpecializedIcon = (type: string) => {
    switch (type) {
      case 'software':
        return <FiCode className="w-5 h-5 text-blue-500" />;
      case 'aiml':
        return <FiLayers className="w-5 h-5 text-cyan-500" />;
      case 'cybersecurity':
        return <FiShield className="w-5 h-5 text-emerald-500" />;
      case 'hardware':
        return <FiCpu className="w-5 h-5 text-purple-500" />;
      default:
        return <FiFileText className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-brand-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Official Document"
          title="Resume / Curriculum Vitae"
          subtitle="Download a general computer engineering resume or select a role-specific CV tailored for your target engineering discipline."
        />

        {/* Master Banner */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-brand-cardDark border border-slate-700 rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden mb-12"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-mono mb-4 border border-brand-cyan/30">
                <FiFileText className="w-3.5 h-3.5" />
                <span>Primary Engineering CV &bull; Last Updated: {personalDetails.resumeLastUpdated}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {personalDetails.name}
              </h3>
              <p className="text-sm text-slate-300 mt-2 font-mono">
                {personalDetails.degree} Candidate &bull; {personalDetails.university}
              </p>

              {/* Bullet highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {resumeHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <FiCheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Download Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href={personalDetails.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-cyan hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-brand-cyan/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Primary CV [PDF]</span>
              </a>

              <a
                href={personalDetails.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Open in New Tab</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Specialized CV Downloads Grid */}
        {personalDetails.specializedResumes && (
          <div className="max-w-4xl mx-auto">
            <h4 className="text-center text-sm font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-6">
              Tailored Specialized Resumes
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalDetails.specializedResumes.map((cv, idx) => (
                <motion.a
                  key={idx}
                  href={cv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-slate-50 dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-brand-cyan/60 hover:shadow-md transition-all flex items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 group-hover:border-brand-cyan/40 transition-colors">
                      {getSpecializedIcon(cv.iconType)}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-primary dark:group-hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                        <span>{cv.label}</span>
                        <FiExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-cyan" />
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {cv.description}
                      </p>
                    </div>
                  </div>

                  <div
                    aria-label={`Open ${cv.label}`}
                    className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 group-hover:text-brand-cyan group-hover:bg-brand-cyan/10 transition-colors shrink-0"
                  >
                    <FiDownload className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
