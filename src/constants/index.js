import {
  wordpress,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cavalovendado,
  crwn,
  chirp,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Funnel Designer",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Creative Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NextJs",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Adobe Creative Cloud",
    icon: docker,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Cavalo Vendado",
    icon: cavalovendado,
    iconBg: "#383E56",
    date: "March 2019 - November 2022",
    points: [
      "Developing and maintaining web applications of the team",
      "Responsible for organizing, planning, and defining campaigns aimed at promoting educational robotics through social media.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Production of artwork and banners that reflect the team's values.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Renan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Renan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Renan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CRWN Clothing",
    description:
      "This is a full-featured e-commerce shop built with React. It is designed to be a high-performance, scalable, and production-ready application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: crwn,
    source_code_link: "https://github.com/rbbalestrin/crwn-clothing",
    live_link: "https://crwn-clothing-sand.vercel.app/",
  },
  {
    name: "Chirp",
    description:
      "A twitter clone based on Next.Js, Prisma, tRpc, Tailwind CSS. This is a project I built using create-t3-app ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: chirp,
    source_code_link: "https://github.com/rbbalestrin/chirp",
    live_link: "https://chirp-seven-blond.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
