import WelcomeSVG from '../app/components/svg/WelcomeSVG.jsx';

const dd = `Danielle's Dogs`;

export const projectDetails = {
  Welcome: {
    title: <WelcomeSVG />,
    titleStyles: 'mb-8',
    link: '',
    desc1: `My name is Gregory Row, and I'm a Full Stack Developer based in
    Swampscott, Massachusetts, USA. I've had the pleasure of working
    with some esteemed corporations and forward-thinking startups.`,
    desc2: `I'm passionate about creating dynamic web solutuions, crafting
    code with passion.`,
    click: 'welcomeClicks',
  },
  'Little Paws Dachshund Rescue': {
    title: 'Little Paws Dacshshund Rescue',
    link: 'https://www.littlepawsdr.org/',
    desc1:
      'Little Paws Dacshshund Rescue is a full stack application built with React, Node.js, Express, and MongoDB. This application consists of an ecommerce platform, an ecard emailing system, events and much more.',
    click: 'visitLittlePawsClicks',
  },
  'Royal Caribbean Clone': {
    title: 'Royal Caribbean Clone',
    link: 'https://royal-caribbean-clone.vercel.app/',
    desc1:
      'Royal Caribbean Clone is a full stack application built with Next.js, Prisma, Tailwindcss, and Postgres. Create an account to view purchased cruises. Go through the booking process and customize your experience.',
    click: 'visitRoyalCaribbeanClicks',
  },
  [dd]: {
    title: dd,
    link: 'https://danielles-dogs.herokuapp.com/',
    desc1: `Danielle's Dogs is a full stack application built with React, GraphQL, Apollo Server and Client, and MongoDB. Fill out the new client form to become Danielle's Dogs newest client.`,
    click: 'visitDaniellesDogsClicks',
  },
  // Plexx: {
  //   title: 'Plexx',
  //   internalLink: '/plexx',
  //   link: '/plexx',
  //   desc1: `Plexx is a 2d side scrolling platform game built with Phaser 3.`,
  //   click: 'visitPlexxClicks',
  // },
};
