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
    company: 'StartUp Lernberg, Kassel (ehrenamtlich)',
    title: 'Frontend-Entwicklerin',
    description:
      'Gestaltung und Implementierung von Angular-Komponenten, API-Integration, Implementierung von HTTP-Anfragen, Autorisierung und State Management (NgRx), Übernahme der technischen Leitung des FrontendTeams, einschließlich Aufgabenverteilung und Koordination der Zusammenarbeit mit Backend und Design',
  },
  {
    id: '7',
    date: '2015-2018',
    company: '11 Region GmbH, Minsk, Belarus',
    title: 'Stellvertretende Direktorin',
    description:
      'Entwicklung & Betrieb eines Online-Shops (OpenCart), Erstellung von Landing Pages (HTML und CSS), Aufbau und Pflege eines Kundenstamms, Kundenberatung',
  },
  {
    id: '8',
    date: '2007-2015',
    company: 'Belarusdance GmbH, Minsk, Belarus',
    title: 'Bürokauffrau, Organisatorin für Wettbewerbe',
    description:
      'Erstellung und Verwaltung von Websites (WP, Joomla), Organisation und Durchführung der größten Tanzwettbewerbe, Tätigkeit im Jury-Team des Wettbewerbs, Büroarbeit',
  },
  {
    id: '9',
    date: '2004-2007',
    company: 'Belarusdance GmbH, Minsk, Belarus',
    title: 'Tanztrainerin',
    description:
      'Leitung der Tanzgruppen und individuellen Trainings, Organisation der Tanzworkshops und -wettbewerbe, Koordination der Teamarbeit',
  },
];
