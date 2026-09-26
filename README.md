# Portfolio Website — Abraraw Ayal

Modern, responsive portfolio for a Data Science / AI student built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Project structure

```
portfolio-website/
├── public/
│   ├── favicon.ico
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── ui/          # Button, Card, SectionTitle
│   │   ├── layout/      # Navbar, Footer
│   │   └── common/      # ProjectCard, SkillCard
│   ├── sections/        # Hero, About, Skills, Projects, etc.
│   ├── data/            # projects.js, skills.js, experience.js
│   ├── hooks/           # useTheme.js
│   ├── utils/           # helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & deploy

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to **Vercel** or **Netlify** (SPA rewrite included via `vercel.json`).

## Customize

| File | What to update |
|------|----------------|
| `src/utils/helpers.js` | Name, bio, email, social links |
| `src/data/projects.js` | Projects & GitHub highlights |
| `src/data/skills.js` | Skills & proficiency |
| `src/data/experience.js` | Internships & education |
| `public/resume.pdf` | Your CV (replace placeholder) |
| `public/images/profile.jpg` | Your profile photo (shows GitHub avatar until added) |

## Features

- Dark / light mode (`useTheme` hook)
- Scroll animations (Framer Motion)
- Project filtering (AI / Data Science / Web)
- Downloadable resume
- Contact form (opens email client)
- Fully responsive layout
