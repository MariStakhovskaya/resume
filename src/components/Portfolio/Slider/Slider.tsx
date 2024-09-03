import { useState } from 'react';
import style from './Slider.module.scss';

type imgType = {
  img: Array<string>;
};

const Slider = ({ img }: imgType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={style.slider}>
      <div className={style.slider__content}>
        <img
          src={img[currentIndex]}
          alt="slide"
          className={style.slider__image}
        />
      </div>
      <div className={style.dotsContainer}>
        {img.map((_, index) => (
          <div
            key={index}
            className={`${style.dot} ${currentIndex === index ? style.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
