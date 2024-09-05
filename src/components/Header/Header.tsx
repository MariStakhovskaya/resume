import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.scss';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    console.log(t);
  };
  return (
    <header className={style.header}>
      <div className={style.header__logo} onClick={() => navigate('/')}>
        <span className={style.header__logoInitial}>M</span>
        <span className={style.header__logoName}>Maria</span>{' '}
        <span className={style.header__logoFamily}>Stachovski</span>
      </div>
      <div className={style.language}>
        <div>
          <button onClick={() => changeLanguage('en')}>En</button>
          <button onClick={() => changeLanguage('ru')}>Ru</button>
          <button onClick={() => changeLanguage('de')}>De</button>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
