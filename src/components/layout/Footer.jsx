import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../utils/helpers';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-semibold text-slate-900 dark:text-white">
              {personalInfo.name}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Data Science · Machine Learning · AI
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-300 transition-all dark:border-slate-700 dark:text-slate-400 dark:hover:text-brand-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500">
          <p>
            {personalInfo.displayEmail} · <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-600 dark:hover:text-brand-400">Email</a>
          </p>
          <p>© {year} {personalInfo.name}. All rights reserved.</p>
        </div>

        <div className="mt-4 text-center text-sm text-slate-500">
          Built with React & Tailwind
        </div>
      </div>
    </footer>
  );
}
