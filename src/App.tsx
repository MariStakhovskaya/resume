import Header from './components/Header/Header';
import style from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import A from './assets/A.png';
import R from './assets/R.png';
import JS from './assets/JS.png';
import H from './assets/H.png';
import TS from './assets/TS.png';
import CSS from './assets/CSS.png';

const shapes = [
  { id: 1, x: 10, y: 50, src: JS },
  { id: 2, x: 1460, y: 200, src: H },
  { id: 3, x: 1360, y: 20, src: R },
  { id: 4, x: 1400, y: 640, src: TS },
  { id: 6, x: 0, y: 630, src: CSS },
  { id: 5, x: 60, y: 350, src: A },
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
        <Outlet />

        <Footer />
      </div>
    </>
  );
}
