import Header from './components/Header/Header';
import style from './App.module.scss';
import About from './components/About/About';
import { TitleBlock } from './components/ui/titleBlock/titleBlock';
import { Portfolio } from './components/Portfolio/Portfolio';

export function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <About />
      <TitleBlock title={'Resume'} />
      <div>Resume</div>
      <TitleBlock title={'Certificated'} />
      <div>Sertificated</div>
      <TitleBlock title={'Skill'} />
      <div>Skill</div>
      <TitleBlock title={'Portfolio'} />
      <Portfolio />
      <TitleBlock title={'Kontact'} />
      <div>Kontact</div>
      <div>Footer</div>
    </div>
  );
}
