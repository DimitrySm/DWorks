/* eslint-disable react/jsx-no-target-blank */
import s from "./Projects.module.css";
import "../../index.css";
import avtotex from "../../assets/Img/projects/avtotex.by.jpg";
import spaceX from "../../assets/Img/projects/SpaceX.jpg";
import myCollages from "../../assets/Img/projects/MyCollages.jpg";

const Projects = () => {
  return (
    <section className={s.project}>
      <div className="container">
        <h2 className={s.project__title}>Мои Работы</h2>
      </div>
      <div className="container">
        <div className={s.project__inner}>
          <div className={s.posts}>
            <div className={s.works__item}>
              <img src={avtotex} alt="" className={s.works__photo} />
              <div className={s.works__content}>
                <div className={s.work__tittle}>Avtotex</div>
                <div className={s.work__text}>
                  <a
                    href="http://www.avtotex.by/"
                    className={s.work__text__link}
                    target="_blank"
                  >
                    Узнать больше
                  </a>
                </div>
              </div>
            </div>
            <h2>Avtotex</h2>
            <p className={s.posts__content}>
              Сайт выполнен на технологиях HTML, JS и CSS
            </p>
          </div>
          <div className={s.posts}>
            <div className={s.works__item}>
              <img src={myCollages} alt="" className={s.works__photo} />
              <div className={s.works__content}>
                <div className={s.work__tittle}>Landing Pages</div>
                <div className={s.work__text}>
                  <a
                    href="https://github.com/DimitrySm/Portfolio"
                    target="_blank"
                    className={s.work__text__link}
                  >
                    Узнать больше
                  </a>
                </div>
              </div>
            </div>
            <h2>Landing Pages</h2>
            <p className={s.posts__content}>
              LandingPages и небольшие Веб сайты на технологиях HTML, JS и CSS
            </p>
          </div>
          <div className={s.posts}>
            <div className={s.works__item}>
              <img src={spaceX} alt="" className={s.works__photo} />
              <div className={s.works__content}>
                <div className={s.work__tittle}>SpaceX</div>
                <div className={s.work__text}>
                  <a
                    href="https://github.com/DimitrySm/SpaceX"
                    target="_blank"
                    className={s.work__text__link}
                  >
                    Узнать больше
                  </a>
                </div>
              </div>
            </div>
            <h2>SpaceX</h2>
            <p className={s.posts__content}>
              SpaceX - это одностраничное приложение выполненное на технологии
              React
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
