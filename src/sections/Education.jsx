import { BookOpen } from 'lucide-react';
import { education } from '../data/experience';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-50/80 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Education"
          title="Academic Background"
          subtitle="Formal training in data science, analytics, and applied statistical reasoning"
        />
        <div className="max-w-2xl mx-auto">
          {education.map((item) => (
            <Card key={item.institution} animate className="p-8 md:flex md:items-center md:gap-6">
              <div className="mx-auto md:mx-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center shrink-0 mb-4 md:mb-0">
                <BookOpen className="text-white" size={28} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="text-brand-600 dark:text-brand-400 font-medium mt-1">{item.institution}</p>
                <p className="text-sm text-slate-500 mt-1">{item.period}</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">{item.graduate}</p>
                <p className="mt-3 text-slate-600 dark:text-slate-400">{item.details}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
