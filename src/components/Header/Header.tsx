import Nav from '../Nav/Nav';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <span className={style.header__logoM}>M</span>
        <span className={style.header__logoName}>Maria</span> Stachovski
      </div>

      <Nav />
    </header>
  );
}

export default Header;
