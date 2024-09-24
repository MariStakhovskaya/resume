import CircleImage from './CircleImage/CircleImage';
import style from './About.module.scss';
import myPhoto from '../../assets/photo1.png';
import { Button } from '../ui/button/button';
import { useTranslation } from 'react-i18next';
import CV from '../../assets/MariaStachovski CV Frontend.pdf';

function About() {
  const { t } = useTranslation();
  return (
    <div className={style.main__about}>
      <div className={style.about__photo}>
        <CircleImage src={myPhoto} alt="Maria" />
      </div>
      <div className={style.about__description}>
        <h4>Frontend {t('Developer')}</h4>
        <h1>
          {t('Maria')} {t('Stakhovskaya')}
        </h1>
        <p>
          {t(
            'Dedicated frontend developer with high motivation and extensive experience in developing reactive and user-friendly applications using HTML, CSS, JavaScript and modern frameworks such as React and Angular. I work excellently both independently and in a team and find effective solutions to complex challenges.',
          )}
        </p>
        <div className={style.btnBlock}>
          <Button
            title={t('Download CV')}
            className="btn-primary"
            onClick={() => window.open(CV, '_blank')}
          />
          {/* <Button title="contact" className="btn-secondary" /> */}
        </div>
      </div>
    </div>
  );
}

export default About;
