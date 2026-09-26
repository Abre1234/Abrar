import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../utils/helpers';
import { useMouseTilt } from '../../hooks/useMouseTilt';

export default function ProfileImage({ size = 'lg', className = '' }) {
  const [src, setSrc] = useState(personalInfo.profileImage);
  const { rotateX, rotateY, onMouseMove, onMouseLeave, style } = useMouseTilt(10);

  const sizes = {
    lg: 'w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80',
    md: 'w-40 h-40',
    sm: 'w-28 h-28',
  };

  const handleError = () => setSrc(personalInfo.profileFallback);

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-brand-400 opacity-60 blur-xl animate-pulse" />
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ ...style, rotateX, rotateY }}
        className={`relative ${sizes[size]} rounded-full p-1 bg-gradient-to-br from-brand-500 via-violet-500 to-brand-400 shadow-2xl shadow-brand-500/30 cursor-pointer`}
      >
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800">
          <img
            src={src}
            alt={personalInfo.name}
            onError={handleError}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <motion.span
          className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          title="Available for opportunities"
        />
      </motion.div>
    </motion.div>
  );
}
