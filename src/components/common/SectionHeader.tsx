import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-semibold tracking-wider text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
        {title}
      </h2>
      <div className={`mt-3 h-1 w-16 bg-gradient-to-r from-brand-primary to-brand-cyan rounded-full ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
