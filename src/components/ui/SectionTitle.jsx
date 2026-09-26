import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
    >
      {label && (
        <span className="inline-block mb-3 text-sm font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
