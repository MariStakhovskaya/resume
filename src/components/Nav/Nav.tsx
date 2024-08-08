import style from './Nav.module.scss';

function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <a href="#about" className={style.nav__link}>
            About Me
          </a>
        </li>
        <li className={style.nav__item}>
          <a href="#skills" className={style.nav__link}>
            Skills
          </a>
        </li>
        <li className={style.nav__item}>
          <a href="#certified" className={style.nav__link}>
            Certified
          </a>
        </li>
        <li className={style.nav__item}>
          <a href="#education" className={style.nav__link}>
            Education
          </a>
        </li>
        <li className={style.nav__item}>
          <a href="#portfolio" className={style.nav__link}>
            Portfolio
          </a>
        </li>
        <li className={style.nav__item}>
          <a href="#contacts" className={style.nav__link}>
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
