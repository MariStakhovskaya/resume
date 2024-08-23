import { useState, useEffect } from 'react';
import style from './Slider.module.scss';

const Slider = () => {
  const images = [
    'https://avatars.dzeninfra.ru/get-zen_doc/3472554/pub_5f072d2ce14a9d6f3f67a4e4_5f072d8b10be9a47f21e84f6/scale_1200',
    'https://amorem.ru/upload/iblock/d20/1.jpg',
    'https://avatars.dzeninfra.ru/get-zen_doc/3472554/pub_5f072d2ce14a9d6f3f67a4e4_5f072d8b10be9a47f21e84f6/scale_1200',
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={style.slider}>
      <button className={style.leftArrow} onClick={prevSlide}>
        ❮
      </button>
      <div className={style.slider__content}>
        <img
          src={images[currentIndex]}
          alt="slide"
          className={style.slider__image}
        />
      </div>
      <button className={style.rightArrow} onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Slider;
