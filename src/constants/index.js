import {
  // Overview
  mobile,
  backend,
  creator,
  web,

  // Work experience
  lek,
  zelinka,

  // Technologies
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  java,
  python,
  mysql,
  php,

  // Projects
  shirtcreator,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const about = 
  "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "IT Support",
    company_name: "Lek",
    icon: lek,
    iconBg: "#383E56",
    date: "June 2021 - June 2021",
    points: [
      "Assisting users with inquiries and technical issues, gaining valuable troubleshooting experience.",
      "Efficiently managing and organizing storage resources, enhancing organizational abilities.",
      "Creating clear and informative labels for easy identification and accessibility.",
      "Preparing equipment and tools for tasks, emphasizing the importance of readiness.",
    ],
  },
  {
    title: "Service and installation of computer equipment",
    company_name: "Zelinka",
    icon: zelinka,
    iconBg: "#E6DEDD",
    date: "March 2023 - May 2022",
    points: [
      "Laptop and computer service",
      "Replacing the motherboard, battery, RAM module, fans, keyboard",
      "Installation of computer equipment, upgrading of components",
      "RAM, SSD/HDD, GPU, expansion slots",
      "Diagnostics and testing of computer equipment",
    ],
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const projectAbout = 'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.';

const projects = [
  {
    name: "Shirt Creator",
    description:
      "User-friendly web application that allows users to customize and visualize shirt designs in 3D",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shirtcreator,
    website_link: "https://shirtcreator.vercel.app/",
    source_code_link: "https://github.com/jurecapuder/ShirtCreator",
  },
];
 
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jure proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jure does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jure optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { about, services, experiences, technologies, projectAbout, projects, testimonials };