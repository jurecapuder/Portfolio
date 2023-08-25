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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/1dkU75focF9-_VL5-1SNSnvHPBG1Nr5o0/view?usp=drive_link",
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
    name: "David Wallace",
    designation: "CFO",
    company: "Dunder Mifflin inc.",
    image: "https://media.licdn.com/dms/image/C4E03AQHU6R-7mLLOuA/profile-displayphoto-shrink_800_800/0/1590010254084?e=2147483647&v=beta&t=GzUb1fUjfrPvoT35JVfoSCG8qnIEq-zvkj4DyRj2Sz8",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jure does.",
    name: "Jo Bennett",
    designation: "COO",
    company: "Sabre inc.",
    image: "https://i.ibb.co/5ktt59x/jobennet.png",
  },
  {
    testimonial:
      "After Jure optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bob Vance",
    designation: "CEO",
    company: "Vance Refrigeration",
    image: "https://media.licdn.com/dms/image/C4D03AQHFsWT5mNMh8A/profile-displayphoto-shrink_800_800/0/1587495120000?e=2147483647&v=beta&t=4kEGJH_D6aZOfD5Vg8VgI42CMo5hXVA7UGHOG4uWVGY",
    // image was: https://randomuser.me/api/portraits/men/9.jpg
  },
];

export { about, services, experiences, technologies, projectAbout, projects, testimonials };