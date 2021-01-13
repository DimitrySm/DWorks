import s from "./Header.module.css";
import logo from "../../assets/Img/logo.jpg";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__logo}>
          <img src={logo} alt="" />
        </div>
        <nav>
          <a href="#4" className={s.nav__link}>
            Главная
          </a>
          <a href="#4" className={s.nav__link}>
            Мои Навыки
          </a>
          <a href="#4" className={s.nav__link}>
            Мои работы
          </a>
          <a href="#4" className={s.nav__link}>
            Контакты
          </a>
        </nav>
        <button className={s.burger} id={s.navToggle}>
          <span className={s.burger__item}>Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
