import { motion } from 'framer-motion';
import { BriefcaseBusiness, Sparkles } from 'lucide-react';
import ProfileImage from '../components/common/ProfileImage';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import { about, stats } from '../utils/helpers';

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/80 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="About" title="Who I Am" subtitle="A brief look at my background and interests" />

        <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-start mb-12">
          <motion.div className="hidden lg:flex justify-center" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <ProfileImage size="md" />
          </motion.div>
          <Card animate className="p-8">
            <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              {about.bio.split('\n\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900">
              <BriefcaseBusiness className="text-brand-600 dark:text-brand-400 shrink-0" size={22} />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{about.status}</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <Card
              key={stat.label}
              animate
              delay={i * 0.08}
              className="p-5 text-center hover:border-brand-400/50 hover:scale-[1.03]"
            >
              <p className="text-2xl md:text-3xl font-display font-bold gradient-text">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>

        <Card animate delay={0.15} className="p-8">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="text-violet-500" size={20} />
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">Interests</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {about.interests.map((interest) => (
              <motion.span
                key={interest}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-brand-500/10 to-violet-500/10 text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-brand-800/50 cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
