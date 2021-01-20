import s from "./Header.module.css";
import logo from "../../assets/Img/logo.jpg";

const Header = ({ closedMenu, onClick }) => {
  const divShow = `${s.toggleDiv} ${closedMenu === false ? s.show : ""}`;
  const btnClass = `${s.burger__item} ${
    closedMenu === false ? s.burger__item__active : ""
  }`;

  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__logo}>
          <img src={logo} alt="" />
        </div>
        <nav>
          <a href="#skills" className={s.nav__link}>
            Мои Навыки
          </a>
          <a href="#projects" className={s.nav__link}>
            Мои работы
          </a>
          <a href="#contact" className={s.nav__link}>
            Контакты
          </a>
          <a href="tel:+375291274791" className={`${s.nav__link} ${s.tel}`}>
            +375 (29) 127-47-91
          </a>
        </nav>
        <button onClick={onClick} className={btnClass}>
          <span></span>
        </button>
        <div className={divShow}>
          <ul>
            <li>
              <a href="#skills">Мои Навыки</a>
            </li>
            <li>
              <a href="#projects">Мои работы</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
            <li>
              <a href="tel:+375291274791">+375 (29) 127-47-91</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
