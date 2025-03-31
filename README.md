# Career Timeline React App

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animation-0055FF?logo=framer) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?logo=tailwind-css) ![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?logo=github-actions)

A dynamic, animated career timeline built with **React** and **Framer Motion**, showcasing my professional journey from High School to IT Projects Engineer. Deployed on **Vercel** with automated CI/CD via **GitHub Actions**, this project demonstrates skills in modern web development, animation, and deployment workflows.

**[Live Demo](https://portfolio-timeline-kohl.vercel.app/**

---

## Features

- **Interactive Timeline**: Horizontal scrolling cards with smooth animations powered by Framer Motion.
- **Responsive Design**: Styled with Tailwind CSS for a sleek, mobile-friendly UI.
- **Skill Highlights**: Animated skill tags that bounce in with hover effects.
- **Detailed Career Path**: Expandable details for key roles and projects.
- **Automated Deployment**: GitHub Actions deploys to Vercel on push (production) and PRs (previews).

---

## Tech Stack

| Technology         | Purpose                     |
|--------------------|-----------------------------|
| **React**          | Core framework for UI       |
| **Framer Motion**  | Animation and transitions   |
| **Tailwind CSS**   | Styling and responsiveness  |
| **GitHub Actions** | CI/CD pipeline              |
| **Vercel**         | Hosting and deployment      |

---

## Project Structure

```plaintext
portfolio-timeline/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow for Vercel
├── .vercel/
│   └── project.json         # Vercel project config
├── src/
│   ├── App.js               # Main app component
│   ├── Timeline.js          # Timeline component with animations
│   └── index.js             # React entry point
├── public/
│   └── index.html           # HTML template with Poppins font
├── package.json             # Dependencies and scripts
└── README.md                # This file