import { Link } from 'react-scroll';
import style from './Nav.module.scss';

function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <Link
            to="section1"
            smooth={true}
            duration={500}
            className={style.nav__link}
          >
            About Me
          </Link>
          {/* </a> */}
        </li>
        <li className={style.nav__item}>
          <Link
            to="section2"
            smooth={true}
            duration={500}
            className={style.nav__link}
          >
            Resume
          </Link>
        </li>

        <li className={style.nav__item}>
          <Link
            to="section5"
            smooth={true}
            duration={500}
            className={style.nav__link}
          >
            Portfolio
          </Link>
        </li>
        <li className={style.nav__item}>
          <Link
            to="section6"
            smooth={true}
            duration={500}
            className={style.nav__link}
          >
            Kontakts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
