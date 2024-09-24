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
        <h4>Frontend Entwicklerin</h4>
        <h1>Maria Stachovski</h1>
        <p>
          Engagierte Frontend-Entwicklerin mit hoher Motivation und umfassender
          Erfahrung in der Entwicklung reaktiver und benutzerfreundlicher
          Anwendungen mittels HTML, CSS, JavaScript sowie moderner Frameworks
          wie React und Angular. Ich arbeite sowohl selbstständig als auch im
          Team hervorragend und finde effektive Lösungen für komplexe
          Herausforderungen.
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
