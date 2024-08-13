import Header from './components/Header/Header';
import style from './App.module.scss';
import About from './components/About/About';
import { TitleBlock } from './components/ui/titleBlock/titleBlock';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Footer } from './components/Footer/Footer';
import { Resume } from './components/Resume/Resume';
import { Certificates } from './components/Certificates/Certificates';

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
      <div>Skill</div>
      <TitleBlock title={'Portfolio'} />
      <Portfolio />
      <TitleBlock title={'Kontact'} />
      <div>Kontact</div>
      <Footer />
    </div>
  );
}
