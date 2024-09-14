import { Work } from './Work/Work';
import { portfolio } from '../../data/portfolio';

import style from './Portfolio.module.scss';

export const Portfolio = () => {
  return (
    <div className={style.portfolio}>
      {portfolio.map((work) => (
        <Work work={work} key={work.id} />
      ))}
    </div>
  );
};
