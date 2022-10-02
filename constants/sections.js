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

export const getSectionPropsByRoute = (route) => {
  const section = pageLabels.find((label) => label.route === route);
  console.log(section);

  if (!section) {
    console.error('Section was not found, route:', route);
    return { sectionTitle: null, icon: null };
  }

  return { sectionTitle: section.name, icon: section.icon };
};

export default function Sections() {
  return pageLabels;
}
