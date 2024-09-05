import { Link } from 'react-router-dom';
import { portfolioType } from '../../../portfolio';
import style from './Work.module.scss';

type WorkType = {
  work: portfolioType;
};

export const Work = ({ work }: WorkType) => {
  return (
    <Link to={`portfolio/${work.id}`} key={work.id}>
      <div className={style.work}>
        <img src={work.firstScreen} alt="work" className={style.image} />
        <div className={style.titleOverlay}>{work.title}</div>
      </div>
    </Link>
  );
};
