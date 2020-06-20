import warehopv1Preview from '../assets/images/warehop-1-sample.jpg';
import warehopv2Preview from '../assets/images/warehop-2-sample.jpg';
import portfolioPreview from '../assets/images/portfolio-sample.jpg';
import commdiaryPreview from '../assets/images/commdiary-sample.jpg';

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
      'A cash-basis accounting based inventory management application aimed towards Estonian sole proprietors.'
  },
  {
    name: 'Warehop 2.0',
    duration: "Oct '19 - Now",
    github: 'https://github.com/stjuks/warehop-frontend-ts',
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
    description: 'A new and improved iteration of Warehop 1.0 with responsive design and refactored codebase.'
  },
  {
    name: 'Communication Diary',
    duration: "Mar - May '20",
    github: 'https://github.com/stjuks/commdiary',
    live: 'https://www.stevenjuks.me/projects/commdiary',
    tech: ['React', 'Styled Components', 'TypeScript', 'LocalStorage'],
    previewImage: commdiaryPreview,
    description:
      'A cash-basis accounting based inventory management application aimed towards Estonian sole proprietors.'
  },
  {
    name: 'Portfolio',
    duration: "May - Jun '20",
    github: 'https://github.com/stjuks/portfolio2020v2',
    live: 'https://www.stevenjuks.me',
    tech: ['React', 'Styled Components', 'Framer Motion'],
    previewImage: portfolioPreview,
    description:
      'A cash-basis accounting based inventory management application aimed towards Estonian sole proprietors.'
  }
];

export const links = {
  fbMsg: 'https://m.me/steven.juks',
  instagram: 'https://instagram.com/stevenjuks',
  email: 'stevenjuks@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/steven-juks-b7a511169/',
  github: 'https://github.com/stjuks'
};
