import { EducationType } from '../Resume';
import style from './Work.module.scss';

type EducationPropsType = {
  education: EducationType;
};

export const Works = (props: EducationPropsType) => {
  return (
    <div className={style.workBlock}>
      <div>
        <span className={style.workBlock__date}>{props.education.date}</span>{' '}
        <span className={style.workBlock__company}>
          {props.education.company}
        </span>
      </div>
      <h5 className={style.workBlock__title}>{props.education.title}</h5>
      <div>{props.education.description}</div>
    </div>
  );
};
