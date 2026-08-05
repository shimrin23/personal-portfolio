import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { personalDetails } from '../../data/portfolioData';
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck, FiCode, FiExternalLink } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactCards = [
    {
      title: 'Email Address',
      value: personalDetails.socials.email,
      icon: FiMail,
      actionType: 'copy',
      actionText: copied ? 'Copied to Clipboard!' : 'Copy Email Address',
      href: `mailto:${personalDetails.socials.email}`,
    },
    {
      title: 'GitHub Profile',
      value: personalDetails.socials.github,
      icon: FiGithub,
      actionType: 'link',
      actionText: 'View Repositories',
      href: personalDetails.socials.github,
    },
    {
      title: 'LinkedIn Network',
      value: personalDetails.socials.linkedin,
      icon: FiLinkedin,
      actionType: 'link',
      actionText: 'Connect on LinkedIn',
      href: personalDetails.socials.linkedin,
    },
  ];

  if (personalDetails.socials.leetcode) {
    contactCards.push({
      title: 'LeetCode Profile',
      value: personalDetails.socials.leetcode,
      icon: FiCode,
      actionType: 'link',
      actionText: 'View Problem Solving Profile',
      href: personalDetails.socials.leetcode,
    });
  }

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-brand-dark/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact & Links"
          subtitle="Direct links for recruiters and engineering managers to reach out for software engineering opportunities."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-brand-cardDark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:border-brand-cyan/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-brand-primary/10 dark:bg-brand-cyan/10 text-brand-primary dark:text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {card.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate max-w-[220px] sm:max-w-[280px]">
                        {card.value}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  {card.actionType === 'copy' ? (
                    <>
                      <button
                        onClick={handleCopyEmail}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-primary text-white hover:bg-brand-primaryHover text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                      >
                        {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
                        <span>{card.actionText}</span>
                      </button>
                      <a
                        href={card.href}
                        className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors"
                        aria-label="Direct mailto link"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    </>
                  ) : (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>{card.actionText}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
