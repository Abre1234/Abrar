import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../utils/helpers';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const links = [
    { icon: Mail, label: personalInfo.displayEmail, href: `mailto:${personalInfo.email}` },
    { icon: Github, label: 'GitHub', href: personalInfo.github },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
    { icon: MapPin, label: personalInfo.location, href: null },
  ];

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white';

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Contact"
          title="Get In Touch"
          subtitle="I'm open to professional opportunities, collaborations, data science projects, and conversations about AI and machine learning."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <Card animate className="lg:col-span-2 p-8 h-full">
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <ul className="space-y-5">
              {links.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-brand-100 dark:bg-brand-900/40">
                    <Icon className="text-brand-600 dark:text-brand-400" size={18} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 hover:text-brand-600 dark:text-slate-400 break-all"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <Button href={personalInfo.resumePath} download variant="secondary" className="w-full">
                Download CV
              </Button>
            </div>
          </Card>

          <Card animate delay={0.1} className="lg:col-span-3 p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <Button type="submit" size="lg">
                <Send size={18} />
                Send Message
              </Button>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-emerald-600 dark:text-emerald-400"
                >
                  Your email client should open shortly. Thank you for reaching out!
                </motion.p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
