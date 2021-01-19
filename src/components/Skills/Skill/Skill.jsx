import React from "react";
import s from "./Skill.module.css";

const Skill = (props) => {
  return (
    <div key={props.id} className={s.skill__item}>
      <img src={props.img} alt="" />
      <div className={s.skill__item__body}>
        <h4>{props.title}</h4>
        <p>{props.discription}</p>
      </div>
    </div>
  );
};

export default Skill;
