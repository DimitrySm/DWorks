import s from "./Skills.module.css";

import Skill from "./Skill/Skill";

const Skills = (props) => {
  let skillElements = props.skillsState.map((s) => (
    <Skill title={s.title} key={s.id} discription={s.discription} img={s.img} />
  ));

  return (
    <section className={s.skills}>
      <div className="container">
        <div className={s.skills__inner}>
          <h3>Мои навыки</h3>
          <div className={s.skills__content}>{skillElements}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
