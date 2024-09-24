export type workExpirienceType = {
  id: string;
  date: string;
  company: string;
  title: string;
  description: string;
};

export const workExpirience: workExpirienceType[] = [
  {
    id: '6',
    date: '2023-today',
    company: 'StartUp Lernberg, Kassel',
    title: 'Frontend Developer',
    description:
      'Design and implementation of Angular components, API integration, implementation of HTTP requests, authorization and state management (NgRx), assuming technical leadership of the frontend team, including task distribution and coordination of collaboration with backend and design',
  },
  {
    id: '7',
    date: '2015-2018',
    company: '11 Region GmbH, Minsk, Belarus',
    title: 'Deputy Director',
    description:
      'Development & operation of an online shop (OpenCart), creation of landing pages (HTML and CSS), building and maintaining a customer base, customer advice',
  },
  {
    id: '8',
    date: '2007-2015',
    company: 'Belarusdance GmbH, Minsk, Belarus',
    title: 'Office clerk, organizer of competitions',
    description:
      'Creation and management of websites (WP, Joomla), organization and implementation of the largest dance competitions, work in the competition jury team, office work',
  },
  {
    id: '9',
    date: '2004-2007',
    company: 'Belarusdance GmbH, Minsk, Belarus',
    title: 'Dance trainer',
    description:
      'Management of dance groups and individual training, organization of dance workshops and competitions, coordination of teamwork',
  },
];
