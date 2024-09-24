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
    description:
      'Studied Angular, developed a learning project implementing the following features: Routing, REST API, NgRx, Form Validation, Authentication and Authorization',
  },
  {
    id: '2',
    date: '2023',
    company: 'The Rolling scopes school',
    title: 'React',
    description:
      'Developing in team of a playground/IDE for GraphQL queries. The application also includes the ability to authorize/authenticate the user through firebase to ensure that only authorized users have access to the tool. As well as localization into two languages. Implemented adaptive design and semantic layout.',
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
    title: 'Studied teaching mathematics and computer science',
    description: 'Degree: Diploma (between Bachelor and Master)',
  },
];
