import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import style from './Slider.module.scss';

type imgType = {
  img: Array<string>;
};

const Slider = ({ img }: imgType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  // Переход на следующий слайд
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1,
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextSlide(), // Свайп влево
    onSwipedRight: () => goToPrevSlide(), // Свайп вправо
    preventScrollOnSwipe: true, // Предотвращаем скроллинг при свайпе
    trackMouse: true, // Обрабатываем также мышь для тестирования на десктопе
  });

  return (
    <div {...handlers} className={style.slider}>
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
