# Karthika S — Personal Portfolio

A modern, elegant personal portfolio website for **Karthika S**, a third-year B.Tech Computer Science and Engineering student at College of Engineering Chengannur.

---

## ✨ Features

- **Sticky left photo panel** — portrait image with smooth gradient blend that morphs into a compact sidebar navigation on scroll
- **Animated hero section** — calligraphic greeting, name, role, and CTA buttons
- **About, Skills, Education, Experience, Projects, Contact** sections — all in a smooth scroll-stack layout
- **Floating glassmorphism navbar** — pill-shaped, collapses gracefully when the sidebar activates
- **Fully responsive** — optimised for mobile, tablet, and desktop
- **Framer Motion animations** — smooth entrance animations and micro-interactions throughout
- **Premium aesthetic** — rose/burgundy colour palette, Alex Brush & Playfair Display typography, glassmorphism effects

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (motion/react) |
| Icons | Lucide React |
| Fonts | Google Fonts — Alex Brush, Playfair Display, Plus Jakarta Sans |

---

## 🚀 Getting Started

**Prerequisites:** Node.js v18+

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 📁 Project Structure

```
karthika-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── images/          # Profile photo and other assets
│   ├── components/
│   │   ├── Navbar.tsx        # Floating glassmorphism navbar
│   │   ├── StickyLeftPhoto.tsx  # Left sticky photo / sidebar
│   │   └── RightScrollStack.tsx # All content sections
│   ├── data/
│   │   └── portfolioData.ts  # All portfolio content — edit here
│   ├── types.ts              # TypeScript interfaces
│   ├── App.tsx               # Root layout and scroll logic
│   └── index.css             # Global styles and font utilities
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ✏️ Customising Content

All portfolio content is managed from a single file:

**[`src/data/portfolioData.ts`](src/data/portfolioData.ts)**

Edit the exported `initialPortfolioData` object to update:
- Name, greeting, role, institution
- About text paragraphs
- Skills list
- Education timeline
- Experience / volunteering entries
- Projects (title, description, tech stack, links)
- Social links (LinkedIn, GitHub, Instagram)
- Contact email and location
- Resume PDF URL

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy on Vercel, Netlify, or any static host.

---

## 👩‍💻 Author

**Karthika S**  
B.Tech Computer Science & Engineering — College of Engineering Chengannur  
📧 karthikashi04@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/karthika-suresh2004) · [GitHub](https://github.com/karthyka-code) · [Instagram](https://instagram.com/karthy.ka._)
