import style from './Resume.module.scss';
import { useTranslation } from 'react-i18next';
import { Works } from './Works/Works';

export type EducationType = {
  id: string;
  date: string;
  company: string;
  title: string;
  description: string;
};

export const Resume = () => {
  const { t } = useTranslation();

  const educations: EducationType[] = [
    {
      id: '1',
      date: '2016-2019',
      company: 'QQQ ggg',
      title: 'App',
      description:
        'rgefs tyrtgfgre grefw gerfwa gerwwa gerfwaw gerfwd gerfsd sesdwa htrgerfsdzacdf yrtgfesdwdvf',
    },
    {
      id: '2',
      date: '2010-2016',
      company: 'Staatliche Pedagogische Universitat, Minsk, Belarus',
      title: 'Studium Lehramt Mathematik',
      description: 'Abschluss: Diplom (zwischen Bachelor und Master)',
    },
    {
      id: '3',
      date: '2016-2019',
      company: 'QQQ ggg',
      title: 'App',
      description: 'rgefs tyrtgfesdwa htrgerfsdzacdf yrtgfesdwdvf',
    },
  ];

  const workExpirience: EducationType[] = [
    {
      id: '1',
      date: '2023-heute',
      company: 'StartUp Lernberg, Kassel',
      title: 'Frontend Entwicklerin',
      description: 'Entwicklung des Frontend-Teils der App mit Angular',
    },
    {
      id: '2',
      date: '2015-2018',
      company: '11 Region GmbH, Minsk, Belarus',
      title: 'Stellvertretende Direktorin',
      description:
        'Entwickelte und betrieb einen Online-Shop (OpenCart), Erstellung von Landing Pages (HTML und CSS), Aufbau eines Kundenstamms (MS Access), Kundenberatung.',
    },
    {
      id: '3',
      date: '2007-2015',
      company: 'Belarusdance GmbH, Minsk, Belarus',
      title: 'Bürokauffrau, Organisatorin für Wettbewerbe',
      description:
        'Arbeitete mit Websites (CMS WordPress, Joomla), Organisierte und veranstaltete gemeinsam mit dem Team die größten Tanzwettbewerbe, Tätig im Auszählungsausschuss des Wettbewerbs, Bürotätigkeit.',
    },
    {
      id: '4',
      date: '2004-2007',
      company: 'Belarusdance GmbH, Minsk, Belarus',
      title: 'Tanztrainerin',
      description:
        'Leitete Tanzgruppen und individuelle Trainings, Organisierte Tanzworkshops und -wettbewerbe, Koordinierte Teamarbeit',
    },
  ];

  return (
    <div className={style.resumeBlock}>
      <div className={style.resumeBlock__column}>
        <h3 className={style.subTitle}>{t('Education')}</h3>
        {educations.map((education) => (
          <div key={education.id} className={style.resumeBlock__item}>
            <Works education={education} />
          </div>
        ))}
      </div>
      <div className={style.resumeBlock__column}>
        <h3>{t('Experience')}</h3>
        {workExpirience.map((work) => (
          <div key={work.id} className={style.resumeBlock__item}>
            <Works education={work} />
          </div>
        ))}
      </div>
    </div>
  );
};
