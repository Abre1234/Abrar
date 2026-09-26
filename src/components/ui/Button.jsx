import { cn } from '../../utils/helpers';

const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-500/25 dark:shadow-brand-500/20',
  secondary:
    'border border-slate-300 bg-white/80 text-slate-800 hover:border-brand-400 hover:text-brand-600 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:border-brand-400',
  ghost: 'text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  download,
  type = 'button',
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} download={download} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
