import warehopv1Preview from '../assets/images/warehop-1-sample.jpg';
import warehopv2Preview from '../assets/images/warehop-2-sample.jpg';
import portfolioPreview from '../assets/images/portfolio-sample.jpg';
import commdiaryPreview from '../assets/images/commdiary-sample.jpg';
import resumeEn from '../assets/files/cv_en.pdf';

export const projects = [
  {
    name: 'Warehop 1.0',
    duration: "Jan - May '19",
    github: 'https://github.com/stjuks/warehop-v1',
    live: 'https://www.stevenjuks.me/projects/warehopv1',
    tech: [
      'React',
      'Styled Components',
      'MobX',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Figma',
      'Sequelize',
      'Puppeteer',
      'Pug'
    ],
    previewImage: warehopv1Preview,
    description:
      "An inventory management web app developed as the main part of my bachelor's thesis. It is meant to give a simple, bare-bones approach for inventory management to Estonian sole proprietors."
  },
  {
    name: 'Warehop 2.0',
    duration: "Oct '19 - Now",
    github: 'https://github.com/stjuks/warehop-v2',
    tech: [
      'React',
      'Styled Components',
      'TypeScript',
      'Node.js',
      'Express',
      'Apollo',
      'GraphQL',
      'PostgreSQL',
      'Figma',
      'Sequelize',
      'Puppeteer',
      'Pug'
    ],
    previewImage: warehopv2Preview,
    description:
      'A new and improved iteration of Warehop 1.0 with responsive design and refactored codebase. (Currently WIP)'
  },
  {
    name: 'Communication Diary',
    duration: "Mar - May '20",
    github: 'https://github.com/stjuks/commdiary',
    live: 'https://www.stevenjuks.me/projects/commdiary',
    tech: ['React', 'Styled Components', 'TypeScript', 'LocalStorage'],
    previewImage: commdiaryPreview,
    description: 'A local web app I developed during my conscription to simplify logging military radio communication.'
  },
  {
    name: 'Portfolio',
    duration: "May - Jun '20",
    github: 'https://github.com/stjuks/portfolio2020',
    tech: ['React', 'Styled Components', 'Framer Motion', 'Adobe XD'],
    previewImage: portfolioPreview,
    description: "The page you're currently looking at :). A portfolio site to give a quick introduction of myself."
  }
];

export const links = {
  fbMsg: 'https://m.me/steven.juks',
  email: 'stevenjuks@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/stevenjuks',
  github: 'https://github.com/stjuks',
  resume: resumeEn
};
