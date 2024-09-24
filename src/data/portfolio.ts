import store from '../assets/store.png';
import store1 from '../assets/store1.png';
import store2 from '../assets/store2.png';
import store3 from '../assets/store3.png';

import birds from '../assets/birds.png';
import birds1 from '../assets/birds1.png';
import birds2 from '../assets/birds2.png';
import birds3 from '../assets/birds3.png';

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
    title: 'OnlineStore',
    tehnology: ['Angular'],
    firstScreen: 'https://amorem.ru/upload/iblock/d20/1.jpg',
    screenImg: ['https://amorem.ru/upload/iblock/d20/1.jpg'],
    deployLink: 'ggg',
    description: 'gfdserfger',
    autor: 'grfewq',
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
    title: 'OnlineStore',
    tehnology: ['Angular'],
    firstScreen: 'https://amorem.ru/upload/iblock/d20/1.jpg',
    screenImg: ['https://amorem.ru/upload/iblock/d20/1.jpg'],
    deployLink: 'ggg',
    description: 'gfdserfger',
    autor: 'grfewq',
  },
];
