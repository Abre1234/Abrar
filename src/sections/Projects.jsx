import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { GITHUB_PROFILE, githubPinned, projectCategories, projects } from '../data/projects';
import ProjectCard from '../components/common/ProjectCard';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-slate-50/80 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Projects"
          title="Featured Projects"
          subtitle="Selected projects in data science, machine learning, AI, analytics, and business intelligence."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1.5 opacity-70">
                  ({projects.filter((p) => p.category === cat).length})
                </span>
              )}
            </motion.button>
          ))}
        </div>

        <motion.p
          key={filter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8"
        >
          Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Github className="text-brand-600 dark:text-brand-400" size={22} />
              <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white">
                GitHub
              </h3>
            </div>
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
            >
              @Abre1234
              <ExternalLink size={14} />
            </a>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Explore my code, experiments, and data science projects.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {githubPinned.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-5 h-full hover:border-brand-300/50 group">
                  <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 mb-2">
                    <Github size={16} />
                    <span className="font-medium group-hover:underline truncate">{repo.name}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    {repo.language && <span>{repo.language}</span>}
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
