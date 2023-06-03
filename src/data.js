import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    target: '_blank',
    className: 'nav-icon',
    iClassName: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'nav-icon',
    iClassName: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    target: '_blank',
    className: 'nav-icon',
    iClassName: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-wallet fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-wallet fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    src: tour1,
    title: 'Tibet Adventure',
    duration: '6 days',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque',
    price: 'From $2100',
    date: 'august 26th, 2023',
    location: 'china',
  },
  {
    id: 2,
    src: tour2,
    title: 'best of java',
    duration: '6 days',
    text: 'vitae tempore voluptatum maxime reprehenderit eum quod',
    price: 'From $1400',
    date: 'october 1th, 2023',
    location: 'china',
  },
  {
    id: 3,
    src: tour3,
    title: 'explore hong kong',
    duration: '6 days',
    text: 'exercitationem fugit, qui corporis.',
    price: 'From $5000',
    date: 'september 15th, 2024',
    location: 'china',
  },
  {
    id: 3,
    src: tour4,
    title: 'kenya highlights',
    duration: '20 days',
    text: 'exercitationem fugit, qui corporis.',
    price: 'From $3300',
    date: 'december 5th, 2013',
    location: 'china',
  },
];
