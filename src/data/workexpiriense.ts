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
    date: '2023-heute',
    company: 'StartUp Lernberg, Kassel',
    title: 'Frontend Entwicklerin',
    description: 'Entwicklung des Frontend-Teils der App mit Angular',
  },
  {
    id: '7',
    date: '2015-2018',
    company: '11 Region GmbH, Minsk, Belarus',
    title: 'Stellvertretende Direktorin',
    description:
      'Entwickelte und betrieb einen Online-Shop (OpenCart), Erstellung von Landing Pages (HTML und CSS), Aufbau eines Kundenstamms (MS Access), Kundenberatung.',
  },
  {
    id: '8',
    date: '2007-2015',
    company: 'Belarusdance GmbH, Minsk, Belarus',
    title: 'Bürokauffrau, Organisatorin für Wettbewerbe',
    description:
      'Arbeitete mit Websites (CMS WordPress, Joomla), Organisierte und veranstaltete gemeinsam mit dem Team die größten Tanzwettbewerbe, Tätig im Auszählungsausschuss des Wettbewerbs, Bürotätigkeit.',
  },
  {
    id: '9',
    date: '2004-2007',
    company: 'Belarusdance GmbH, Minsk, Belarus',
    title: 'Tanztrainerin',
    description:
      'Leitete Tanzgruppen und individuelle Trainings, Organisierte Tanzworkshops und -wettbewerbe, Koordinierte Teamarbeit',
  },
];
