import { useNavigate, useParams } from 'react-router-dom';

import { IoMdPerson } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';

import { portfolio } from '../../../data/portfolio';
import Slider from '../Slider/Slider';

import style from './Project.module.scss';

export const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = portfolio.find((pr) => pr.id === id);

  const nextProject = (index: string) => {
    if (+index < portfolio.length) {
      navigate(`/portfolio/${+index + 1}`);
    }
  };

  const prevProject = (index: string) => {
    if (2 <= +index && +index <= portfolio.length) {
      navigate(`/portfolio/${+index - 1}`);
    }
  };

  return (
    <div className={style.project}>
      <div className={style.project__header}>
        <h1>{project?.title}</h1>
        <div className={style.header__nav}>
          <div className={style.header__arrow}>
            <button onClick={() => prevProject(project!.id)}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="3"
                  height="24"
                  transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 27.0586 41.1543)"
                  fill="#387178"
                  className={style.icon__arrow}
                />
                <rect
                  width="3"
                  height="24"
                  transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 29.1797 9.0918)"
                  fill="#387178"
                  className={style.icon__arrow}
                />
              </svg>
            </button>
            <button onClick={() => nextProject(project!.id)}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="20.9414"
                  y="41.1543"
                  width="3"
                  height="24"
                  transform="rotate(-135 20.9414 41.1543)"
                  fill="#387178"
                  className={style.icon__arrow}
                />
                <rect
                  x="18.8203"
                  y="9.0918"
                  width="3"
                  height="24"
                  transform="rotate(-45 18.8203 9.0918)"
                  fill="#387178"
                  className={style.icon__arrow}
                />
              </svg>
            </button>
          </div>

          <button onClick={() => navigate('/')}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="7.95508"
                y="10.0518"
                width="3"
                height="41"
                transform="rotate(-44.956 7.95508 10.0518)"
                fill="#85ADAF"
                className={style.icon__rect}
              />
              <rect
                x="10.0527"
                y="39.0459"
                width="3"
                height="41"
                transform="rotate(-134.956 10.0527 39.0459)"
                fill="#85ADAF"
                className={style.icon__rect}
              />
            </svg>
          </button>
        </div>
      </div>

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
              <li>
                <IoMdPerson color="#387178" /> {project?.autor}
              </li>
              <li className={style.item__world}>
                <TbWorld color="#387178" />
                <a href={project?.deployLink} target="_blank" rel="noreferrer">
                  {project?.title}
                </a>
              </li>
            </ul>
          </div>
          <div>{project?.description}</div>
          <div className={style.project__technologies}>
            <h3>Technologies</h3>
            <ul className={style.tags}>
              {project?.tehnology.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
