import s from "./Skills.module.css";
import react from "../../assets/Img/skills/react.svg";
import sass from "../../assets/Img/skills/sass.svg";
import js from "../../assets/Img/skills/js.svg";
import html from "../../assets/Img/skills/html-5.svg";
import git from "../../assets/Img/skills/git.svg";
import css from "../../assets/Img/skills/css-3.svg";

const Skills = () => {
  return (
    <section className={s.skills}>
      <div className="container">
        <div className={s.skills__inner}>
          <h3>Мои навыки</h3>
          <div className={s.skills__content}>
            <div className={s.skill__item}>
              <img src={react} alt="" />
              <div className={s.skill__item__body}>
                <h4>React</h4>
                <p>
                  React — JavaScript-библиотека с открытым исходным кодом для
                  разработки пользовательских интерфейсов. React разрабатывается
                  и поддерживается Facebook, Instagram и сообществом отдельных
                  разработчиков и корпораций. React может использоваться для
                  разработки одностраничных и мобильных приложений.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={html} alt="" />
              <div className={s.skill__item__body}>
                <h4>HTML5</h4>
                <p>
                  HTML5 — язык для структурирования и представления содержимого
                  всемирной паутины.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={css} alt="" />
              <div className={s.skill__item__body}>
                <h4>CSS</h4>
                <p>
                  CSS — формальный язык описания внешнего вида документа,
                  написанного с использованием языка разметки. Также может
                  применяться к любым XML-документам, например, к SVG или XUL.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={js} alt="" />
              <div className={s.skill__item__body}>
                <h4>JS</h4>
                <p>
                  JavaScript — мультипарадигменный язык программирования.
                  Поддерживает объектно-ориентированный, императивный и
                  функциональный стили. Является реализацией стандарта
                  ECMAScript. JavaScript обычно используется как встраиваемый
                  язык для программного доступа к объектам приложений.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={git} alt="" />
              <div className={s.skill__item__body}>
                <h4>GitHub</h4>
                <p>
                  GitHub — крупнейший веб-сервис для хостинга IT-проектов и их
                  совместной разработки. Веб-сервис основан на системе контроля
                  версий Git и разработан на Ruby on Rails и Erlang компанией
                  GitHub, Inc.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={sass} alt="" />
              <div className={s.skill__item__body}>
                <h4>SASS</h4>
                <p>
                  Sass — модуль, включенный в Haml. Sass — это метаязык на
                  основе CSS, предназначенный для увеличения уровня абстракции
                  CSS-кода и упрощения файлов каскадных таблиц стилей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
