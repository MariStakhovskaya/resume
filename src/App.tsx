import style from './App.module.scss';
import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import A from './assets/A.png';
import R from './assets/R.png';
import JS from './assets/JS.png';
import H from './assets/H.png';
import TS from './assets/TS.png';
import CSS from './assets/CSS.png';

export function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // const rX = screenWidth - 150;
  const hX = screenWidth - 90;
  const tsX = screenWidth - 130;

  const shapes = [
    { id: 1, x: 5, y: 40, src: JS },
    { id: 2, x: hX, y: 200, src: H },
    { id: 3, x: screenWidth * 0.87, y: 5, src: R },
    { id: 4, x: tsX, y: screenHeight * 0.9, src: TS },
    { id: 6, x: screenWidth * 0.01, y: 630, src: CSS },
    { id: 5, x: 60, y: 350, src: A },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [offsets, setOffsets] = useState(
    shapes.map(() => ({ offsetX: 0, offsetY: 0 })),
  );

  const targetOffsets = useRef(shapes.map(() => ({ offsetX: 0, offsetY: 0 })));

  useEffect(() => {
    const handleMouseMove = () => {
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
      requestAnimationFrame(animate);
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
        <Outlet />
      </div>
    </>
  );
}
