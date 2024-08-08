import { portfolioType } from '../../../portfolio';
import style from './Work.module.scss';

type WorkType = {
  work: portfolioType;
};

export const Work = ({ work }: WorkType) => {
  return (
    <div className={style.work}>
      <img src={work.screenImg[0]} alt="work" className={style.image} />
      <div className={style.titleOverlay}>{work.title}</div>
    </div>
  );
};
