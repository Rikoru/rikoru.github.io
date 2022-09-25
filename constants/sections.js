const pageLabels = [
  {
    name: 'About',
    route: 'about',
    icon: 'account_circle_rounded',
  },
  {
    name: 'Portfolio',
    route: 'portfolio',
    icon: 'computer_rounded',
  },
  {
    name: 'Posts',
    route: 'posts',
    icon: 'article',
  },
  {
    name: 'Contact',
    route: 'contact',
    icon: 'contact_mail_rounded',
  },
];

export default function Sections() {
  return pageLabels;
}

export function getSectionByRoute(route) {
  return pageLabels.find((item) => item.route === route) || {};
}
