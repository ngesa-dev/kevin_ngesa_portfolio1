<!--
Keywords: React Developer Portfolio, Framer Motion, Tailwind CSS Portfolio, Kevin Ngesa, Practical Devs, Web Developer Portfolio
-->


<div align='center'>
<br/>
<a href="https://kevinngesaportfolio1.vercel.app" target="_blank">
<img src='https://github.com/user-attachments/assets/c9dd9061-2b7c-45b1-9397-2d6e36fe377c'/>
</a>
</div>

# 💼 Kevin Ngesa — Developer Portfolio

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Framer_Motion-black?style=for-the-badge&logoColor=white&logo=framer&color=black" alt="framer motion" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>


  <h3 align="center">Modern Web Developer Portfolio</h3>

    <div align="center">
    🚀 A Visually Engaging Developer Portfolio built with **React**, **Tailwind CSS**, and **Framer Motion** for seamless animations.  
🧠 Founder of Practical Devs • "Let’s do it."
    </div>



---

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)


## 🖥️ Live Demo

🔗 [Visit Live Portfolio](https://kevinngesaportfolio1.vercel.app/)

---
## <a name="introduction">🤖 Introduction</a>

By developing this project, you will gain hands-on experience in crafting immersive web experiences, building component-based layouts, and implementing engaging animations. The combination of creativity and technical skills showcased in this project serves as an excellent learning opportunity for developers seeking to enhance their portfolio and captivate users with cutting-edge web design.

- ⚛️ React.js (Vite)
- 🌬️ Tailwind CSS
- 🎮 Three.js / @react-three/fiber / Drei
- 🎞️ Framer Motion
- 💌 EmailJS
- ☁️ Hosted on Vercel

---

## 📸 Preview

![screenshot](https://github.com/user-attachments/assets/c9dd9061-2b7c-45b1-9397-2d6e36fe377c)

---
## <a name="features">🧩 Features</a>

## 🧩 Features

- 🎨 Responsive layout with modern 3D design
- 🔄 Smooth animations with Framer Motion
- 🧩 Modular components & clean codebase
- 💬 Contact form powered by EmailJS
- 📱 Mobile-first and fast loading
- 🔍 SEO & accessibility optimized

---
## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## 🚀 How to Run Locally

```bash
git clone https://github.com/Kevin-Ngesa/kevin_ngesa_portfolio1.git
cd kevin_ngesa_portfolio1


**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>constants.js</code></summary>

```javascript
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaCloud
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss,SiFramer, SiThreedotjs} from "react-icons/si";
import {ecommerce_pic1,e_learning_pic, foodstore, portfolio_builder} from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "tech_skills",
    title: "Tech Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



export const serviceIcons = {
  web: FaCode,
  database: FaDatabase,
  mobile: FaMobileAlt,
  api: FaServer,
  uiux: FaPaintBrush,
  cloud: FaCloud,
};

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive websites using React.js and Tailwind CSS.",
    iconKey: "web",
  },
  {
    title: "Database Design",
    description: "Designing clean and scalable MongoDB schemas with performance in mind.",
    iconKey: "database",
  },
  {
    title: "Mobile Development",
    description: "Creating mobile-first, responsive designs that adapt beautifully on all devices.",
    iconKey: "mobile",
  },
  {
    title: "API Integration",
    description: "Integrating RESTful APIs and ensuring smooth data communication.",
    iconKey: "api",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive interfaces focused on simplicity and usability.",
    iconKey: "uiux",
  },
  {
    title: "Cloud Deployment",
    description: "Deploying projects on platforms like Vercel and Render with CI/CD pipelines.",
    iconKey: "cloud",
  },
];



// constants/index.js


// Skill icon map
export const skillIcons = {
  react: FaReact,
  node: FaNodeJs,
  mongodb: SiMongodb,
  html: FaHtml5,
  css: FaCss3Alt,
  js: FaJs,
  tailwind: SiTailwindcss,
  git: FaGitAlt,
  framer: SiFramer,
  threejs: SiThreedotjs,
};

// Skill list with icon keys and optional color
const skills = [
  { name: "React", iconKey: "react", color: "text-blue-400" },
  { name: "Node.js", iconKey: "node", color: "text-green-500" },
  { name: "MongoDB", iconKey: "mongodb", color: "text-green-600" },
  { name: "HTML5", iconKey: "html", color: "text-orange-500" },
  { name: "CSS3", iconKey: "css", color: "text-blue-500" },
  { name: "JavaScript", iconKey: "js", color: "text-yellow-400" },
  { name: "Tailwind CSS", iconKey: "tailwind", color: "text-teal-400" },
  { name: "Git", iconKey: "git", color: "text-orange-400" },
  { name: "Framer Motion", iconKey: "framer", color: "text-pink-400" },
  { name: "Three.js", iconKey: "threejs", color: "text-white" },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ngesa proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ngesa does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ngesa optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce site for small businesses to manage orders, payments, and inventory.",
    image: ecommerce_pic1, // Replace with your actual image path
    tech: ["#React", "#Node.js", "#MongoDB", "#TailwindCSS"],
  },
  {
    title: "E-Learning Platform (Practical Devs)",
    description:
      "An online learning site for web development beginners with video tutorials and component-based learning.",
    image: e_learning_pic,
    tech: ["#React", "#FramerMotion", "#TailwindCSS", "#MongoDB"],
  },
  {
    title: "Online Food Store",
    description:
      "A modern food delivery system with real-time order tracking and payment integration.",
    image: foodstore,
    tech: ["#React", "#Express", "#Mongoose", "#Stripe"],
  },
  {
    title: "Portfolio Builder",
    description:
      "A dynamic portfolio builder that helps devs showcase projects, skills, and experience easily.",
 image: portfolio_builder,
    tech: ["#Next.js", "#Sanity.io", "#TailwindCSS", "#Vercel"],
  },
];

export { services,skills, testimonials, projects };
```
</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
  color-scheme: dark;
}



.black-gradient {
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
```
</details>

<details>
<summary><code>Motion.js</code></summary>

```javascript

export const horizontalLoop = (duration = 30) => ({
  x: ["0%", "-50%"],
  transition: {
    ease: "linear",
    duration,
    repeat: Infinity,
  },
});



export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

```
</details>

<details>
<summary><code>styles.js</code></summary>

```javascript
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };
```

</details>

<details>
<summary><code>tailwind.config.cjs</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        tertiaryLight: '#2a204d',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
         keyframes: {
          
        bgPan: {
          '0%, 100%': { backgroundPosition: 'center top' },
          '50%': { backgroundPosition: 'center center' },
        },
        bgZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        bgPan: 'bgPan 20s ease-in-out infinite',
        bgZoom: 'bgZoom 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

```

</details>

## <a name="links">🔗 Links</a>

Models and Assets used in the project can be found [here](https://kevinngesaportfolio1.vercel.app/)




