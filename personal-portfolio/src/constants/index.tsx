/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  CuriositiesType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Bot,
  Box,
  Briefcase,
  Coffee,
  FileText,
  Github,
  Globe,
  Home,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  Server,
  Settings,
  ShieldUser,
  User,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Curiosities',
    link: '#curiosities',
    icon: Coffee,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Linkedin,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/vit%C3%B3ria-guidine/',
  },
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/vitoriaguidines',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: '/https://www.instagram.com/badideame/',
  },
  {
    icon: Box,
    label: 'HackTheBox',
    link: 'https://app.hackthebox.com/shori',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.jpg',
    title: 'Full stack Letterboxd inspired App',
    tags: ['API', 'Development'],
    projectLink: 'https://github.com/vitoriaguidines/letterboxd-react',
  },
  {
    imgSrc: '/images/project-ph-2.png',
    title: 'Subdomain list checker',
    tags: ['Domain', 'Security'],
    projectLink: 'https://github.com/vitoriaguidines/domain-check',
  },
  {
    imgSrc: '/images/project-ph-3.png',
    title: 'Mobile University drive App',
    tags: ['API', 'Mobile'],
    projectLink: 'https://github.com/vitoriaguidines/app-de-carona',
  },
  {
    imgSrc: '/images/project-ph-4.png',
    title: 'Platform Game using PyGame',
    tags: ['Python', 'Game Desgin'],
    projectLink: 'https://rbarroso.itch.io/neodroid',
  },
];

const education: ExperienceType[] = [
  {
    year: '2021',
    title: 'CS50: Introdution to Computer Science',
    institute: 'Harvard Online Education',
    desc: 'Focused on introducing basic programming languages and algorithm logic for beginners',
  },
  {
    year: '2022 - Present',
    title: 'Bacharelor of Computer Science',
    institute: 'Federal Fluminense University (UFF)',
    desc: 'Building my computer science foundation with a strong focus on scientific and technical learning.',
  },
  {
    year: '2025',
    title: 'DevSecOps Fundamentals',
    institute: 'Udemy / Online Course',
    desc: 'Explored DevSecOps fundamentals, including CI/CD pipelines, package structures, Docker, and secure development practices.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2023 – 2024',
    title: 'Web Developer Intern',
    institute: 'Kya Engeneering',
    desc: 'Developed a SCADA supervisory web application using Django, integrating a Python-based API with a SQL database and modern development tools.',
  },
  {
    year: '2024 – 2025',
    title: 'Red Team - Ethical Hacker Intern',
    institute: 'Globo',
    desc: 'Worked with ethical hacking, penetration testing, security monitoring, and enterprise security tools in real-world environments.',
  },
  {
    year: '2025 – Present',
    title: 'DevSecOps Intern',
    institute: 'Globo',
    desc: 'Collaborated with development teams to integrate security into CI/CD pipelines, running SAST and DAST tools, performing threat modeling, and improving repository security.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Python',
    imgSrc: '/images/tools/python.svg',
  },
  {
    label: 'Kali Linux',
    imgSrc: '/images/tools/kali.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Javascript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Docker',
    imgSrc: '/images/tools/docker.svg',
  },
  {
    label: 'GCP',
    imgSrc: '/images/tools/gcp.svg',
  },
  {
    label: 'MySQL',
    imgSrc: '/images/tools/mysql.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Aspiration',
    desc: 'I want to keep learning, questioning, and growing while using technology to build systems that positively impact people and environments.',
    projects: 'Aiming to Learn More',
    icon: <Lightbulb className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Security',
    desc: 'Building secure-by-design systems that balance strong security practices with usability, reliability, and the realities of modern digital environments.',
    projects: 'Devsecops and Red Team',
    icon: <ShieldUser className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building modern web applications with React and Tailwind CSS, emphasizing responsive design, clear structure, and maintainable, scalable front-end code.',
    projects: 'Projects in GitHub',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Cloud and Network',
    desc: 'Learning and exploring cloud and networking concepts, with a growing focus on cloud research, infrastructure, and distributed systems.',
    projects: 'Final Project Research',
    icon: <Server className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Automation and IoT',
    desc: 'Working with automation at the intersection of electronics and software, motivated by understanding and improving how machines operate.',
    projects: 'Building and Learning',
    icon: <Bot className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '05+',
    label: 'Researchs',
  },
  {
    number: '05+',
    label: 'Years Of Experience',
  },
  {
    number: '30+',
    label: 'Projects Done',
  },
];

const curiosities: CuriositiesType[] = [
  {
    name: 'Media and Gaming',
    role: 'I was highly inspired by Mecha Robots and Cyberpunk Media',
    image: '/images/pictures/eva.jpg',
    text: 'My interest in technology was first sparked by robotics in media and games. From mecha stories like Evangelion and Gundam to cyberpunk works such as Akira and Ghost in the Shell, as well as films like The Matrix and Blade Runner, these influences shaped how I see technology — not just as tools, but as complex systems where machines, humans, and society intersect.',
    link: '#',
  },
  {
    name: 'Cybersec and Hardware',
    role: 'Why did I engaged with this topic',
    image: '/images/pictures/hack.jpg',
    text: 'My journey into cybersecurity began with a fascination for hardware and internal logic—deconstructing devices to understand how they work from the inside out. This curiosity evolved into a focus on how systems communicate and where they are vulnerable, driving my commitment to identifying risks and strengthening digital defenses.',
    link: '#',
  },
  {
    name: "What's Next?",
    role: 'What are my future goals?',
    image: '/images/pictures/tech.jpg',
    text: 'Moving forward, my goal is to dive deeper into the ever-evolving tech landscape by staying at the forefront of emerging innovations and industry trends. I am eager to connect with inspiring minds and tackle diverse challenges that push my boundaries, allowing me to continuously refine my expertise and evolve as a professional.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  curiosities,
};