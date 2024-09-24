export type EducationType = {
  id: string;
  date: string;
  company: string;
  title: string;
  description: string;
};

export const educations: EducationType[] = [
  {
    id: '1',
    date: '2024',
    company: 'The Rolling scopes school',
    title: 'Angular',
    description: 'Studie und Entwicklung eines Lernprojekt in Angular',
  },
  {
    id: '2',
    date: '2023',
    company: 'The Rolling scopes school',
    title: 'React',
    description: 'Entwickeln eines Lernprojekt mit GraphQL',
  },
  {
    id: '3',
    date: '2022-2023',
    company: 'The Rolling scopes school',
    title: 'Javascript/Front-end ',
    description: 'JavaScript, HTML, SCSS',
  },
  {
    id: '4',
    date: '2021-2022',
    company: 'IT-Incubator',
    title: 'Frontend',
    description: 'React, Redux, RTK, Rest API, JavaScript, TypeScript',
  },
  {
    id: '5',
    date: '2010-2016',
    company: 'Staatliche Pädagogische Universität, Minsk, Belarus',
    title: 'Studium Lehramt Mathematik und Informatik',
    description: 'Abschluss: Diplom (zwischen Bachelor und Master)',
  },
];
