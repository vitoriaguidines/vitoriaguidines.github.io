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
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Bot,
  Briefcase,
  Facebook,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Lightbulb,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Server,
  Settings,
  ShieldUser,
  Smartphone,
  Twitter,
  User,
  Youtube,
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
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: '/#',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: '/#',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: '/#',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    link: '/#',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2018 – 2020',
    title: 'Bachelor of Computer Science',
    institute: 'National University of Technology',
    desc: 'Focused on front-end development, UI design, and web application architecture.',
  },
  {
    year: '2021 – 2022',
    title: 'Frontend Development Bootcamp',
    institute: 'Udemy / Online Course',
    desc: 'Learned modern JavaScript, React, and responsive UI patterns through real-world projects.',
  },
  {
    year: '2023',
    title: 'Advanced UI/UX Design Course',
    institute: 'Design+Code',
    desc: 'Explored advanced design systems, motion design, and accessibility best practices.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2021 – 2022',
    title: 'Frontend Developer Intern',
    institute: 'PixelForge Studio',
    desc: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.',
  },
  {
    year: '2022 – Present',
    title: 'UI Engineer',
    institute: 'Freelance / Remote Work',
    desc: 'Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
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
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
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
    number: '27+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
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
  testimonials,
};