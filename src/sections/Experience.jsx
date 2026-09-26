import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Github, Sparkles } from 'lucide-react';
import { experience } from '../data/experience';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Experience"
          title="Experience"
          subtitle="Practical experience in data systems, analytics, and data science workflows"
        />

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-violet-500 to-transparent" aria-hidden />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.div
                key={item.company + item.role}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative pl-12 md:pl-20 group"
              >
                <div
                  className={`absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 shadow-lg transition-transform group-hover:scale-125 ${
                    item.highlight ? 'bg-brand-500 shadow-brand-500/50' : 'bg-violet-500 shadow-violet-500/40'
                  }`}
                />
                <Card
                  className={`p-6 md:p-8 transition-all group-hover:shadow-lg ${
                    item.highlight ? 'ring-2 ring-brand-500/20 dark:ring-brand-400/20' : ''
                  }`}
                >
                  {item.highlight && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 mb-3 px-2 py-1 rounded-lg bg-brand-50 dark:bg-brand-950/50">
                      <Sparkles size={12} />
                      Current Role
                    </span>
                  )}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-brand-100 dark:bg-brand-900/40">
                        <Briefcase className="text-brand-600 dark:text-brand-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="text-brand-600 dark:text-brand-400 font-medium">{item.company}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-2 mb-4">
                    {item.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
                    >
                      <Github size={16} />
                      View related project on GitHub
                      <ExternalLink size={14} className="opacity-60" />
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
