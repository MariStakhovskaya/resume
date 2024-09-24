import { useTranslation } from 'react-i18next';
import { EducationType } from '../../../data/educations';
import style from './Works.module.scss';

type EducationPropsType = {
  education: EducationType;
};

export const Works = (props: EducationPropsType) => {
  const { t } = useTranslation();
  return (
    <div className={style.workBlock}>
      <div className={style.workBlock__info}>
        <span className={style.workBlock__date}>{t(props.education.date)}</span>{' '}
        <span className={style.workBlock__company}>
          {props.education.company}
        </span>
      </div>
      <h5 className={style.workBlock__title}>{t(props.education.title)}</h5>
      <div className={style.workBlock__description}>
        {t(props.education.description)}
      </div>
    </div>
  );
};
