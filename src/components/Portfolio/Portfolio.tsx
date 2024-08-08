import style from './Portfolio.module.scss';
import { portfolio } from '../../portfolio';
import { Work } from './Work/Work';

export const Portfolio = () => {
  return (
    <div className={style.portfolio}>
      {portfolio.map((work) => (
        <Work work={work} key={work.id} />
      ))}
    </div>
  );
};
