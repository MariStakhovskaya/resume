import style from './Resume.module.scss';
import { useTranslation } from 'react-i18next';
import { Work } from './Work/Work';

export type EducationType = {
  id: string;
  date: string;
  company: string;
  title: string;
  description: string;
};

export const Resume = () => {
  const { t, i18n } = useTranslation();

  const educations: EducationType[] = [
    {
      id: '1',
      date: '2016-2019',
      company: 'QQQ ggg',
      title: 'App',
      description: 'rgefs tyrtgfesdwa htrgerfsdzacdf yrtgfesdwdvf',
    },
    {
      id: '2',
      date: '2010-2016',
      company: 'Staatliche Pedagogische Universitat, Minsk, Belarus',
      title: 'Studium Lehramt Mathematik',
      description: 'Abschluss: Diplom (zwischen Bachelor und Master)',
    },
  ];

  return (
    <div className={style.resumeBlock}>
      <div className={style.resumeBlock__column}>
        <h2>{t('Education')}</h2>
        {educations.map((education) => (
          <div key={education.id} className={style.resumeBlock__item}>
            <Work education={education} />
          </div>
        ))}
      </div>
      <div className={style.resumeBlock__column}>
        <h2>{t('Experience')}</h2>
        {educations.map((education) => (
          <div key={education.id} className={style.resumeBlock__item}>
            <Work education={education} />
          </div>
        ))}
      </div>
    </div>
  );
};
