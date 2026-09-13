export interface StatItem {
  id: string;
  label: string;
  value: string;
  unit?: string;
  iconName: 'check-square' | 'users' | 'star';
  hasTrendArrow?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Video Production' | 'Branding' | 'Graphic Design' | 'Web Design' | 'Motion Graphics';
  description: string;
  fullDetails?: string;
  image: string;
  featured?: boolean;
  tags: string[];
  client?: string;
  year?: string;
}

export const HERO_STATS: StatItem[] = [
  {
    id: 'exp',
    label: 'YEARS OF EXPERIENCE',
    value: '9+',
    unit: 'Years',
    iconName: 'check-square',
  },
  {
    id: 'projects',
    label: 'PROJECTS COMPLETED',
    value: '120+',
    iconName: 'users',
    hasTrendArrow: true,
  },
  {
    id: 'satisfaction',
    label: 'CLIENT SATISFACTION',
    value: '98%',
    iconName: 'star',
    hasTrendArrow: true,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'High-impact visual designs, key art, editorial layouts, and print collateral crafted with precision.',
    iconName: 'Palette',
    tags: ['Key Art', 'Editorial', 'Typography', 'Print'],
  },
  {
    id: 'video-production',
    title: 'Video Production',
    description: 'End-to-end commercial video direction, cinematic shooting, storytelling, color grading, and editing.',
    iconName: 'Video',
    tags: ['Commercials', 'Color Grading', 'Direction', 'Editing'],
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Kinetic typography, 2D/3D motion graphics, logo animations, and title sequences for film and media.',
    iconName: 'Sparkles',
    tags: ['Kinetic Type', '3D Motion', 'Title Cards', 'VFX'],
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Comprehensive visual identity systems, brand guidelines, logo marks, and visual language systems.',
    iconName: 'Layers',
    tags: ['Logo Design', 'Brand Systems', 'Styleguides', 'Strategy'],
  },
  {
    id: 'social-media',
    title: 'Social Media Content',
    description: 'Engaging short-form video reels, promotional campaigns, and social media assets optimized for conversion.',
    iconName: 'Share2',
    tags: ['Reels & Shorts', 'Campaigns', 'Ad Creatives', 'Grid Strategy'],
  },
  {
    id: 'web-creative',
    title: 'Web / Creative Design',
    description: 'Modern, high-converting digital landing pages, UI designs, and interactive web experiences for creators and brands.',
    iconName: 'Monitor',
    tags: ['Landing Pages', 'UI/UX', 'Interactive Design', 'Design Systems'],
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'neon-cyber',
    title: 'Neon Cyber Identity',
    category: 'Branding',
    description: 'Futuristic brand identity & visual system for an international tech summit.',
    fullDetails: 'Complete brand guidelines, promotional video package, 3D motion assets, and digital design system created for Neon Cyber summit.',
    image: '/images/portfolio/project-1.jpg',
    featured: true,
    tags: ['Brand Identity', '3D Assets', 'Design System'],
    client: 'Cyber Summit Co.',
    year: '2025',
  },
  {
    id: 'aura-audio',
    title: 'Aura Audio Kinetic Series',
    category: 'Motion Graphics',
    description: 'High-energy kinetic typography & motion campaign for premium wireless headphones.',
    fullDetails: 'Designed and animated 3D product turnables, typography overlays, and social media ad cuts across 5 languages.',
    image: '/images/portfolio/project-2.jpg',
    featured: true,
    tags: ['3D Motion', 'Product Ad', 'Kinetic Type'],
    client: 'Aura Audio',
    year: '2025',
  },
  {
    id: 'velocity-motors',
    title: 'Velocity Motors Commercial',
    category: 'Video Production',
    description: 'Cinematic brand film showcasing electric supercar performance and luxury design.',
    fullDetails: 'Directed, edited, and color-graded a 60-second broadcast commercial with sound design and custom visual effects.',
    image: '/images/portfolio/project-3.jpg',
    featured: true,
    tags: ['Commercial', 'Color Grading', 'Direction'],
    client: 'Velocity EV',
    year: '2024',
  },
  {
    id: 'vanguard-platform',
    title: 'Vanguard Web Experience',
    category: 'Web Design',
    description: 'Dark-themed interactive portfolio and SaaS interface for creative directors.',
    fullDetails: 'Crafted the UX architecture, dark aesthetic visual design, and interactive UI component library.',
    image: '/images/portfolio/project-4.jpg',
    featured: false,
    tags: ['UI/UX', 'Web App', 'Dark Mode'],
    client: 'Vanguard Media',
    year: '2024',
  },
  {
    id: 'synthetix-3d',
    title: 'Synthetix Brand Package',
    category: 'Graphic Design',
    description: 'Editorial poster collection and digital key art series for an electronic music festival.',
    fullDetails: 'Created high-resolution key art posters, stage visuals, social media grid layouts, and VIP merch design.',
    image: '/images/portfolio/project-5.jpg',
    featured: false,
    tags: ['Key Art', 'Posters', 'Print & Digital'],
    client: 'Synthetix Fest',
    year: '2024',
  },
  {
    id: 'lumina-studio',
    title: 'Lumina Studio Campaign',
    category: 'Video Production',
    description: 'Docu-style promotional series highlighting master craftspeople & industrial designers.',
    fullDetails: 'Produced a 3-part documentary short film series with custom score, archival footage restoration, and color grading.',
    image: '/images/portfolio/project-6.jpg',
    featured: false,
    tags: ['Documentary', 'Storytelling', 'Video Series'],
    client: 'Lumina Craft',
    year: '2024',
  },
];

export const NAV_LINKS = [
  { name: 'What I Do', href: '#what-i-do' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

export const CONTACT_INFO = {
  email: 'hello@romlaberinto.com',
  location: 'Available Globally / Remote',
  availability: 'Open for Select Q3/Q4 Projects',
  socials: [
    { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
    { name: 'Behance', href: 'https://behance.net', icon: 'FolderGit2' },
    { name: 'YouTube', href: 'https://youtube.com', icon: 'Youtube' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'X / Twitter', href: 'https://twitter.com', icon: 'Twitter' },
  ],
};
