import { Certificates } from '../Certificates/Certificates';
import { Kontakts } from '../Kontacts/Kontakts';
import { Portfolio } from '../Portfolio/Portfolio';
import { Resume } from '../Resume/Resume';
import { Skills } from '../Skills/Skills';
import { TitleBlock } from '../ui/titleBlock/titleBlock';
import style from './Main.module.scss';
import { Element } from 'react-scroll';
import About from '../About/About';

export function Main() {
  return (
    <>
      <div className={style.wrapper}>
        <Element name="section1" className="section">
          <About />
        </Element>
        <Element name="section2" className="section">
          <TitleBlock title={'Resume'} />
          <Resume />
        </Element>

        <TitleBlock title={'Certificated'} />
        <Certificates />

        <TitleBlock title={'Skills'} />
        <Skills />

        <Element name="section5" className="section">
          <TitleBlock title={'Portfolio'} />
          <Portfolio />
        </Element>
        <Element name="section6" className="section">
          <TitleBlock title={'Kontakt'} />
          <Kontakts />
        </Element>
      </div>
    </>
  );
}
