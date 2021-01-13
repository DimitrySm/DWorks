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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae quaerat tempore architecto et delectus iure fuga
                  inventore excepturi reiciendis blanditiis.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={html} alt="" />
              <div className={s.skill__item__body}>
                <h4>HTML5</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae quaerat tempore architecto et delectus iure fuga
                  inventore excepturi reiciendis blanditiis.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={css} alt="" />
              <div className={s.skill__item__body}>
                <h4>CSS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae quaerat tempore architecto et delectus iure fuga
                  inventore excepturi reiciendis blanditiis.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={js} alt="" />
              <div className={s.skill__item__body}>
                <h4>JS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae quaerat tempore architecto et delectus iure fuga
                  inventore excepturi reiciendis blanditiis.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={git} alt="" />
              <div className={s.skill__item__body}>
                <h4>Git Hub</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae quaerat tempore architecto et delectus iure fuga
                  inventore excepturi reiciendis blanditiis.
                </p>
              </div>
            </div>
            <div className={s.skill__item}>
              <img src={sass} alt="" />
              <div className={s.skill__item__body}>
                <h4>SASS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae quaerat tempore architecto et delectus iure fuga
                  inventore excepturi reiciendis blanditiis.
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
