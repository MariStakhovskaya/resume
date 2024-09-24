import store from '../assets/store.png';
import store1 from '../assets/store1.png';
import store2 from '../assets/store2.png';
import store3 from '../assets/store3.png';

import birds from '../assets/birds.png';
import birds1 from '../assets/birds1.png';
import birds2 from '../assets/birds2.png';
import birds3 from '../assets/birds3.png';

import graph from '../assets/graph.png';
import graph1 from '../assets/graph1.png';
import graph2 from '../assets/graph2.png';
import graph3 from '../assets/graph3.png';

import bank from '../assets/bank.png';
import bank1 from '../assets/bank1.png';

export type portfolioType = {
  id: string;
  title: string;
  tehnology: Array<string>;
  firstScreen: string;
  screenImg: Array<string>;
  deployLink: string;
  description: string;
  autor: string;
};

export const portfolio: portfolioType[] = [
  {
    id: '1',
    title: 'Online Store DuckyDuck',
    tehnology: ['React', 'TS', 'CSS', 'React Router', 'Redux Toolkit'],
    firstScreen: store,
    screenImg: [store1, store2, store3],
    deployLink: 'https://maristakhovskaya.github.io/online-store/',
    description:
      'Ein in RSS-Kursen erstelltes Bildungsprojekt, von der Idee bis zur Umsetzung in einem Team aus zwei Frontend-Entwicklern.  Der Online-Shop umfasst einen Warenkorb, Sortierung, Suche, Paginierung, Filterung und eine Karte für ein einzelnes Produkt.',
    autor: 'Maria Stachovski, Darya Suravtsova',
  },
  {
    id: '2',
    title: 'SuperBank',
    tehnology: ['React'],
    firstScreen: bank,
    screenImg: [bank1],
    deployLink: 'https://maristakhovskaya.github.io/test-loanProduct/',
    description:
      'Die Testaufgabe umfasst das Layout entsprechend dem Layout, die Erstellung eines Bankprodukts über ein Formular und die Bearbeitung des erstellten Produkts.',
    autor: 'Maria Stachovski',
  },
  {
    id: '3',
    title: 'SongBird',
    tehnology: ['JavaScript', 'HTML', 'CSS'],
    firstScreen: birds,
    screenImg: [birds1, birds2, birds3],
    deployLink: 'https://maristakhovskaya.github.io/quizbirds/index.html',
    description:
      'Quiz "Birdsong", written in JavaScript as part of training at rs-school. Listen to the audio and guess the bird.',
    autor: 'Maria Stachovski',
  },
  {
    id: '4',
    title: 'Playground for graphQL',
    tehnology: [
      'React',
      'React-router-dom',
      'TypeScript',
      'react-toastify',
      'react-i18next',
      'firebase',
      'TypeScript',
    ],
    firstScreen: graph,
    screenImg: [graph1, graph2, graph3],
    deployLink: 'https://serene-rabanadas-22fef4.netlify.app/',
    description:
      'GraphiQL is a playground/IDE for graphQL queries. The application also includes the ability to authorize/authenticate the user through firebase to ensure that only authorized users have access to the tool. As well as localization into two languages (Russian and English). Implemented adaptive design and semantic layout. The application is written in React using new features. When writing, typescript, sass were used. The application was written by the GRAf MAY team as part of the 3rd stage of training in RS School React 2023 Q1.',
    autor: 'Maria Stachovski, Yuliya Lobzha, Alesia Branovitskaya',
  },
];
