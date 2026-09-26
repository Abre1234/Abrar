import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../ui/Card';
import ProjectCover from './ProjectCover';
import { useMouseTilt } from '../../hooks/useMouseTilt';

export default function ProjectCard({ project, index = 0 }) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave, style } = useMouseTilt(5);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ ...style, rotateX, rotateY }}
        className="h-full"
      >
        <Card className="p-0 flex flex-col h-full overflow-hidden hover:-translate-y-1 hover:border-brand-400/40 group" hover>
          <ProjectCover cover={project.cover} title={project.title} />

          <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-start justify-between gap-3 mb-2">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {project.category}
              </span>
              {project.featured && (
                <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                  Featured
                </span>
              )}
            </div>

            <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2 mb-2">
              {project.title}
            </h3>

            {project.language && (
              <span className="inline-block text-xs text-brand-600 dark:text-brand-400 mb-2 font-medium">
                {project.language}
              </span>
            )}

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400 mt-auto group/link"
            >
              <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
              View on GitHub
              <ExternalLink size={14} className="opacity-60" />
            </a>
          </div>
        </Card>
      </motion.div>
    </motion.article>
  );
}
