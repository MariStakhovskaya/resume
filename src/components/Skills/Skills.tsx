import { skills } from '../../data/skills';

import style from './Skills.module.scss';

export const Skills = () => {
  return (
    <div className={style.skillWrapper}>
      {skills.map((skill) => (
        <div key={skill.id} className={style.skill}>
          <div className={style.skill__block}>
            <div className={style.skill__icon} style={{ color: skill.color }}>
              <skill.icon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
