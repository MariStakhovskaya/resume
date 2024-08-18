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

export function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <About />
      <TitleBlock title={'Resume'} />
      <Resume />
      <TitleBlock title={'Certificated'} />
      <Certificates />
      <TitleBlock title={'Skill'} />
      <Skills />
      <TitleBlock title={'Portfolio'} />
      <Portfolio />
      <TitleBlock title={'Kontakt'} />
      <Kontakts />
      <Footer />
    </div>
  );
}
