import { skills } from '../data/skills';
import SkillCard from '../components/common/SkillCard';
import SectionTitle from '../components/ui/SectionTitle';

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Skills"
          title="Technical Expertise"
          subtitle="Tools and technologies I use to build data-driven solutions"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, index) => (
            <SkillCard key={group.category} category={group.category} items={group.items} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
