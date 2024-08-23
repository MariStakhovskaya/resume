import Header from './components/Header/Header';
import style from './App.module.scss';
import About from './components/About/About';
import { TitleBlock } from './components/ui/titleBlock/titleBlock';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Footer } from './components/Footer/Footer';
import { Resume } from './components/Resume/Resume';
import { Certificates } from './components/Certificates/Certificates';
import { Skills } from './components/Skills/Skills';
import { Kontakts } from './components/Kontacts/Kontakts';
import { Element } from 'react-scroll';

export function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Element name="section1" className="section">
        <About />
      </Element>
      <Element name="section2" className="section">
        <TitleBlock title={'Resume'} />
        <Resume />
      </Element>
      <Element name="section3" className="section">
        <TitleBlock title={'Certificated'} />
        <Certificates />
      </Element>
      <Element name="section4" className="section">
        <TitleBlock title={'Skills'} />
        <Skills />
      </Element>
      <Element name="section5" className="section">
        <TitleBlock title={'Portfolio'} />
        <Portfolio />
      </Element>
      <Element name="section6" className="section">
        <TitleBlock title={'Kontakt'} />
        <Kontakts />
      </Element>
      <Footer />
    </div>
  );
}
