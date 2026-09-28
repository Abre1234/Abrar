export const personalInfo = {
  name: 'Abraraw Ayal',
  title: 'Data Scientist | Machine Learning & AI Enthusiast',
  intro:
    'I build data-driven solutions that turn complex data into actionable insights and intelligent systems. My work combines statistics, Python, machine learning, data analytics, and AI to solve real-world problems.',
  email: 'abraraw.ayal@outlook.com',
  displayEmail: 'abrarawayal6@gmail.com',
  github: 'https://github.com/Abre1234',
  githubUsername: 'Abre1234',
  linkedin: 'https://www.linkedin.com/in/abre1234',
  resumePath: './resume.pdf',
  location: 'Bahir Dar, Ethiopia',
  /** Drop your photo at public/images/profile.jpg (recommended) */
  profileImage: './images/profile.jpg',
  /** Fallback until you add profile.jpg */
  profileFallback: 'https://avatars.githubusercontent.com/u/216869054?v=4',
};

export const stats = [
  { label: 'Data Science', value: 'B.Sc.' },
  { label: 'Data & ML Projects', value: 10, suffix: '+' },
  { label: 'Primary Language', value: 'Python' },
  { label: 'Graduate', value: 2026 },
];

export const about = {
  bio: `I'm a Data Science graduate from Bahir Dar University with a strong foundation in statistics, programming, machine learning, data analysis, and database systems. I enjoy transforming raw data into clean insights and building AI-powered tools that solve practical business and research problems.`,
  interests: ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Data Analytics', 'Computer Vision', 'Statistical Modeling', 'Database Systems'],
  status: 'Open to opportunities & collaborations',
};

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function getActiveSection(sectionIds, offset = 120) {
  const scrollY = window.scrollY + offset;
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const id = sectionIds[i].replace('#', '');
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) return id;
  }
  return sectionIds[0]?.replace('#', '') || '';
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
