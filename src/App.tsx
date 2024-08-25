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
import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import A from './assets/A.png';
import R from './assets/R.png';
import JS from './assets/JS.png';
import H from './assets/H.png';

const shapes = [
  { id: 1, x: 0, y: 50, src: R },
  { id: 2, x: 1000, y: 0, src: H },
  { id: 3, x: 1470, y: 10, src: A },
  { id: 4, x: 1460, y: 640, src: R },
  { id: 6, x: 0, y: 620, src: JS },
];

export function App() {
  const [offsets, setOffsets] = useState(
    shapes.map(() => ({ offsetX: 0, offsetY: 0 })),
  );

  const targetOffsets = useRef(shapes.map(() => ({ offsetX: 0, offsetY: 0 })));

  useEffect(() => {
    const handleMouseMove = () => {
      // При каждом движении мыши обновляем случайные смещения
      targetOffsets.current = targetOffsets.current.map(() => ({
        offsetX: Math.random() * 20 - 10,
        offsetY: Math.random() * 20 - 10,
      }));
    };

    const animate = () => {
      setOffsets((prevOffsets) =>
        prevOffsets.map((offset, index) => ({
          offsetX:
            offset.offsetX +
            (targetOffsets.current[index].offsetX - offset.offsetX) * 0.02,
          offsetY:
            offset.offsetY +
            (targetOffsets.current[index].offsetY - offset.offsetY) * 0.02,
        })),
      );
      requestAnimationFrame(animate); // Рекурсивная анимация
    };

    animate();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className={style.background}>
        {shapes.map((shape, index) => (
          <img
            key={shape.id}
            src={shape.src}
            alt={`Shape ${shape.id}`}
            className={style.shape}
            style={{
              left: `${shape.x + offsets[index].offsetX}px`,
              top: `${shape.y + offsets[index].offsetY}px`,
            }}
          />
        ))}
      </div>
      <div className={style.wrapper}>
        <Header />
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
        <Footer />
        <Outlet />
      </div>
    </>
  );
}
