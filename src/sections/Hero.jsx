import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import ProfileImage from '../components/common/ProfileImage';
import FloatingOrbs from '../components/ui/FloatingOrbs';
import Button from '../components/ui/Button';
import { personalInfo } from '../utils/helpers';
import { useTypingEffect } from '../hooks/useTypingEffect';

export default function Hero() {
  const { displayed, done } = useTypingEffect(personalInfo.title, 35, 600);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" aria-hidden />
      <FloatingOrbs />
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-950/50 dark:text-brand-300 dark:border-brand-800 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Data Scientist · ML & AI · Data Analytics
            </motion.span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-brand-600 dark:text-brand-400 font-medium min-h-[3rem]">
              {displayed}
              {!done && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-brand-500 ml-1 align-middle"
                />
              )}
            </p>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {personalInfo.intro}
            </p>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Currently focused on building practical machine learning systems, analytics solutions, and AI-powered applications.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects" size="lg">
                View Projects
              </Button>
              <Button
                href={personalInfo.resumePath}
                download="Abraraw_Ayal_Resume.pdf"
                variant="secondary"
                size="lg"
              >
                <Download size={18} />
                Download CV
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                <Mail size={18} />
                Contact Me
              </Button>
            </div>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <ProfileImage size="lg" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <ArrowDown size={20} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
