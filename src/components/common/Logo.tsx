import React from 'react';

interface LogoProps {
  className?: string;
  initials?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', initials = 'SMS' }) => {
  return (
    <a 
      href="#hero" 
      aria-label="Sirajuddeen Shimrin Portfolio Home" 
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-slate-900 dark:text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1 ${className}`}
    >
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 dark:bg-brand-cardDark border border-slate-800 dark:border-slate-700 shadow-md group-hover:border-brand-cyan transition-colors duration-300">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-brand-primary/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="font-mono font-extrabold text-sm text-brand-cyan group-hover:scale-105 transition-transform duration-200">
          {initials}
        </span>
      </div>
      <div className="flex flex-col text-left">
        <span className="font-semibold text-sm leading-tight text-slate-900 dark:text-slate-100">
          Sirajuddeen Shimrin
        </span>
        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
          CompEng Portfolio
        </span>
      </div>
    </a>
  );
};
