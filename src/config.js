export const colors = {
  green: '#64ffda',
  navy: '#0a192f',
  darkNavy: '#020c1b',
};

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});



export const navLinks = [
  {
    name: 'About',
    url: 'about',
  },
  {
    name: 'Experience',
    url: 'jobs',
  },
  {
    name: 'Work',
    url: 'projects',
  },
  {
    name: 'Contact',
    url: 'contact',
  },
];

export const email = 'vnav.m69@gmail.com';

export const siteMetadata = {
  title: 'Vaishnav Manoj',
  description: 'Vaishnav Manoj is a junior at the University of Massachusetts Boston, majoring in Computer Science. He focuses on mobile app development and web development.',
  siteUrl: 'https://vaishnavmanoj.com',
  image: 'static/og.png',
  instagramUsername: 'vaishnavv_m',
}

export const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/vaishnavswe',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vaishnavv_m/',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/vaishnav-manoj/',
  },
]

