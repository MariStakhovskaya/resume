import { useState } from 'react';
import style from './CircleImage.module.scss';

type CircleImageType = {
  src: string;
  alt: string;
};

const CircleImage = ({ src, alt }: CircleImageType) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className={style.circleCcontainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className={style.circle}
        style={{
          transform: `translate(${position.x / 10}px, ${position.y / 10}px)`,
        }}
      />
    </div>
  );
};

export default CircleImage;
