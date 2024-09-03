import CircleImage from './CircleImage/CircleImage';
import style from './About.module.scss';
import myPhoto from '../../assets/photo1.png';
import { Button } from '../ui/button/button';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    // <div className={style.main}>
    <div className={style.main__about}>
      <div className={style.about__photo}>
        <CircleImage src={myPhoto} alt="icon" />
      </div>
      <div className={style.about__description}>
        <h4>Frontend Entwicklerin</h4>
        <h1>Maria Stachovski</h1>
        <p>
          Energetische und motivierte Frontend-Entwicklerin mit umfangreicher
          Erfahrung in der Entwicklung reaktiver und benutzerfreundlicher
          Anwendungen mittels HTML, CSS, JavaScript sowie moderner Frameworks
          wie React und Angular. Ich kann sowohl selbstständig als auch im Team
          hervorragend arbeiten und finde effektiv Lösungen für komplexe
          Probleme.
        </p>
        <div>
          <Button title={t('Download CV')} className="btn-primary" />
          {/* <Button title="contact" className="btn-secondary" /> */}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default About;
