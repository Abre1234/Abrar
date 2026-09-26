import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function SkillCard({ category, items, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-6 hover:border-brand-300/50 dark:hover:border-brand-500/30 h-full">
        <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-5">
          {category}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
