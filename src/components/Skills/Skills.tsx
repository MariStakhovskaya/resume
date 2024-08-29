import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

import style from './Skills.module.scss';

export const Skills = () => {
  const skills = [
    {
      id: 1,
      title: 'JavaScript',
      icon: <IoLogoJavascript />,
      color: '#F7DF1E',
    },
    {
      id: 2,
      title: 'React',
      icon: <FaReact />,
      color: '#61DAFB',
    },
    {
      id: 3,
      title: 'Angular',
      icon: <FaAngular />,
      color: '#FF0000',
    },
    {
      id: 4,
      title: 'HTML',
      icon: <FaHtml5 />,
      color: '#E34F26',
    },
    {
      id: 5,
      title: 'CSS',
      icon: <FaCss3Alt />,
      color: '#1572B6',
    },
    {
      id: 6,
      title: 'TS',
      icon: <SiTypescript />,
      color: '#61DAFB',
    },
  ];

  return (
    <div className={style.skillWrapper}>
      {skills.map((skill) => (
        <div key={skill.id} className={style.skill}>
          <div className={style.skill__block}>
            <div className={style.skill__icon} style={{ color: skill.color }}>
              {skill.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
