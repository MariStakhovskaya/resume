import { useParams } from 'react-router-dom';
import style from './Project.module.scss';
import { portfolio } from '../../../portfolio';
import Slider from '../Slider/Slider';

export const Project = () => {
  const { id } = useParams();

  const project = portfolio.find((pr) => pr.id === id);

  return (
    <div className={style.project}>
      <h1>{project?.title}</h1>
      <div className={style.project__wrapper}>
        <div className={style.project__slider}>
          <Slider img={project!.screenImg} />
        </div>
        <div className={style.project__description}>
          <div>
            <h3>Description</h3>
          </div>
          <div>
            <ul>
              <li>autor</li>
              <li>{project?.deployLink}</li>
              <li>date</li>
            </ul>
          </div>
          <div>{project?.description}</div>
          <div>
            <h3>Tehnology</h3>
            <ul className={style.tags}>
              {project?.tehnology.map((t) => <li key={project.id}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
