import { motion } from 'framer-motion';
import { BookText, Users, Sparkles } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';

const researchItems = [
  {
    title: 'Applied statistics and machine learning research',
    description:
      'Exploring statistical modeling, predictive analysis, and practical machine learning workflows in applied data science contexts.',
    icon: BookText,
  },
  {
    title: 'Student academic performance clustering research',
    description:
      'Using data analysis and clustering methods to investigate patterns in academic performance and behavior-related factors.',
    icon: Sparkles,
  },
  {
    title: 'Blue Nile Machine Intelligence Lab community contribution',
    description:
      'Contributing to technical learning and community engagement around machine intelligence, data science, and practical AI exploration.',
    icon: Users,
  },
  {
    title: 'Hackathons and AI / data science competitions',
    description:
      'Participating in technical challenges and community programs to strengthen problem-solving, experimentation, and applied analytics skills.',
    icon: Sparkles,
  },
  {
    title: 'Dala Studio Ambassador activities',
    description:
      'Supporting digital-skills initiatives and knowledge-sharing opportunities in technology and data-driven communities.',
    icon: Users,
  },
];

export default function Research() {
  return (
    <section id="research" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Research"
          title="Research & Community"
          subtitle="Academic, technical, and community involvement around data science, AI, and applied learning"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {researchItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
