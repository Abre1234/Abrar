import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export default function Card({
  children,
  className,
  hover = true,
  animate = false,
  delay = 0,
  as: Component = 'div',
  ...props
}) {
  const baseClass = cn(
    'rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm shadow-sm',
    'dark:border-slate-700/60 dark:bg-slate-900/60',
    hover && 'transition-all duration-300 hover:shadow-md',
    className
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay }}
        className={baseClass}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Component className={baseClass} {...props}>
      {children}
    </Component>
  );
}
