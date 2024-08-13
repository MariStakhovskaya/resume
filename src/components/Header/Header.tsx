import Nav from '../Nav/Nav';
import style from './Header.module.scss';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <span className={style.header__logoM}>M</span>
        <span className={style.header__logoName}>Maria</span> Stachovski
      </div>
      <div>
        <button onClick={() => changeLanguage('en')}>En</button>
        <button onClick={() => changeLanguage('ru')}>Ru</button>
        <button onClick={() => changeLanguage('de')}>De</button>
      </div>

      <Nav />
    </header>
  );
}

export default Header;
