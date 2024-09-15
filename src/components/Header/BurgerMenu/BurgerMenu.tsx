import { useState } from 'react';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMmenu}>
      <div
        className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              Resume
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
