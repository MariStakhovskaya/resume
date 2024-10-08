import { Link } from 'react-scroll';
import style from './Nav.module.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Nav() {
  const [activeLink, setActiveLink] = useState('section1');
  const { t } = useTranslation();

  useEffect(() => {
    setActiveLink('section1');
  }, []);

  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <Link
            spy={true}
            activeClass={style.nav__item_active}
            to="section1"
            smooth={true}
            duration={500}
            className={`${style.nav__link} ${activeLink === 'section1' ? style.nav__item_active : ''}`}
            onSetActive={() => setActiveLink('section1')}
          >
            {t('About Me')}
          </Link>
        </li>
        <li className={style.nav__item}>
          <Link
            to="section2"
            smooth={true}
            duration={500}
            className={style.nav__link}
          >
            {t('Resume')}
          </Link>
        </li>

        <li className={style.nav__item}>
          <Link
            to="section5"
            smooth={true}
            duration={500}
            className={style.nav__link}
          >
            {t('Portfolio')}
          </Link>
        </li>
        <li className={style.nav__item}>
          <Link
            to="section6"
            smooth={true}
            duration={500}
            className={style.nav__link}
          >
            {t('Contacts')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
