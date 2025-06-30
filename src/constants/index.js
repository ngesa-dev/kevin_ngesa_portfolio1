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

export const services = [
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
export const skills = [
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



export { testimonials,projects};
