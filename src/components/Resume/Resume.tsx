import style from './Resume.module.scss';
import { useTranslation } from 'react-i18next';
import { Works } from './Works/Works';
import { useEffect, useState } from 'react';
import { educations } from '../../data/educations';
import { workExpirience } from '../../data/workexpiriense';

export const Resume = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

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
      <div className={style.resumeBlock__column}>
        <h3
          className={style.subTitle}
          onClick={() => setEducationOpen(!educationOpen)}
        >
          {t(' Aus- und Weiterbildung')}{' '}
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
    </div>
  );
};
