# Computer Engineering Personal Portfolio Website

A production-quality, responsive, and recruiter-focused portfolio template engineered specifically for **Computer Engineering undergraduates** and **aspiring Software Engineers**. Designed with modern React practices, strict TypeScript, Tailwind CSS, Framer Motion, and WCAG 2.1 AA accessibility.

---

## 🌟 Key Technical Features

- **Recruiter-Tailored Structure**: Sections curated specifically for tech recruiters, engineering managers, and technical interviewers.
- **Zero Fictional Data**: Strict placeholder policy using explicit bracketed tags (`[Your Name]`, `[University]`, `[GitHub URL]`, etc.).
- **System-Aware Light/Dark Mode**: Persistent theme toggle with zero screen flash, respecting system preferences and storing state in `localStorage`.
- **Accessible Mobile Navigation**: Custom animated mobile drawer menu with ARIA accessibility labels and keyboard trap handlers (`Escape` key close).
- **Flagship Project Case Study**: Special expanded case-study showcase with problem/solution breakdown and technical feature lists.
- **Strict TypeScript & Pinned Dependencies**: All package versions in `package.json` are exact, ensuring reproducible builds across any environment.
- **SEO & Social Cards**: Built-in Open Graph, Twitter Cards, Google Fonts, and JSON-LD structured data.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)

---

## 🚀 Quick Start Guide

### 1. Prerequisites

Make sure you have **Node.js** (v18.x or higher) and **npm** installed on your machine.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/[your-username]/personal-portfolio.git
cd personal-portfolio
npm install
```

### 3. Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production

Compile TypeScript and build the optimized static asset bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✏️ Customization Guide

Replacing placeholder data is simple and centralized:

### Step 1: Personal Details & Content (`src/data/portfolioData.ts`)

Open `src/data/portfolioData.ts` in your code editor. Search for `[` or replace the fields:

- **Personal Details**: Update `name`, `title`, `university`, `degree`, `expectedGraduation`, `shortBio`, `socials`.
- **Skills**: Add or remove skills under `Languages`, `Computer Engineering`, `Web`, `Databases`, `DevOps & Tools`, and `AI / ML`.
- **Projects**: Replace `flagship-project` and `project-2` through `project-[N]` with your real projects, GitHub repository links, and problem/solution summaries.
- **Experience**: Add your internships, freelance projects, volunteer work, or open-source pull requests.
- **Education & Coursework**: Update coursework lists, GPA, and Capstone Project.
- **Certifications & Achievements**: Update honors, hackathons, and certifications.

### Step 2: Resume PDF Setup

1. Save your ATS-friendly resume file named `resume.pdf` into the `public/` folder.
2. In `src/data/portfolioData.ts`, update `resumeUrl` to point to `/resume.pdf`:
   ```typescript
   resumeUrl: '/resume.pdf',
   ```

### Step 3: Meta Tags & SEO (`index.html`)

Open `index.html` and update:
- `<title>`
- `<meta name="description" ...>`
- `<meta property="og:title" ...>`
- Structured JSON-LD `<script type="application/ld+json">`

### Step 4: Logo Mark & Favicon

- The logo initials default to `CE`. You can change the displayed initials in `src/components/common/Logo.tsx` by setting the `initials` prop (e.g. `initials="JD"`).
- Customize `public/favicon.svg` with your own SVG design if desired.

---

## 🌐 Deployment Instructions

### Vercel (Recommended)
1. Push your code to GitHub.
2. Import the project into [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.
3. Click **Deploy Site**.

### GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "/personal-portfolio/"` to `vite.config.ts`.
3. Add deploy script to `package.json`: `"deploy": "vite build && gh-pages -d dist"`
4. Run `npm run deploy`.

---

## 📋 Quality & Compliance Checklist

- [x] **Accessibility**: WCAG 2.1 AA compliant contrast ratios, visible focus indicators, semantic HTML tags, keyboard navigation.
- [x] **Responsiveness**: Verified layout and mobile hamburger menu across desktop, laptop, tablet, and mobile breakpoints.
- [x] **Dark Mode**: Persistent light/dark theme switch with zero screen flickering.
- [x] **Performance**: Fast initial load times, optimized image placeholders, CSS utility splitting.
- [x] **SEO**: Pre-configured meta tags, OpenGraph attributes, and Schema.org structured data.
- [x] **Clean Code**: Modular component layout, strict TypeScript interfaces, pinned dependency versions.
- [x] **Placeholder Policy**: 100% authentic placeholder structure with no fabricated claims or fake metrics.
