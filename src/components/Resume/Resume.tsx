import style from './Resume.module.scss';
import { useTranslation } from 'react-i18next';
import { Works } from './Works/Works';
import { useEffect, useState } from 'react';

export type EducationType = {
  id: string;
  date: string;
  company: string;
  title: string;
  description: string;
};

export const Resume = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

  const educations: EducationType[] = [
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
      company: 'Staatliche Pedagogische Universitat, Minsk, Belarus',
      title: 'Studium Lehramt Mathematik',
      description: 'Abschluss: Diplom (zwischen Bachelor und Master)',
    },
  ];

  const workExpirience: EducationType[] = [
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

  const checkMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className={style.resumeBlock}>
      <div className={style.resumeBlock__column}>
        <h3
          className={style.subTitle}
          onClick={() => setEducationOpen(!educationOpen)}
        >
          {t('Education')}{' '}
          {isMobile && <span>{educationOpen ? '▲' : '▼'}</span>}
        </h3>
        {(!isMobile || educationOpen) && (
          <div className={style.resumeBlock__items}>
            {educations.map((education) => (
              <div key={education.id} className={style.resumeBlock__item}>
                <Works education={education} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={style.resumeBlock__column}>
        <h3
          className={style.subTitle}
          onClick={() => setExperienceOpen(!experienceOpen)}
        >
          {t('Experience')}{' '}
          {isMobile && <span>{experienceOpen ? '▲' : '▼'}</span>}
        </h3>
        {(!isMobile || experienceOpen) && (
          <div className={style.resumeBlock__items}>
            {workExpirience.map((work) => (
              <div key={work.id} className={style.resumeBlock__item}>
                <Works education={work} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
