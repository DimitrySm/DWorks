/* eslint-disable react/jsx-no-target-blank */
import s from "./Project.module.css";

const Project = (props) => {
  return (
    <div key={props.id} className={s.posts}>
      <div className={s.works__item}>
        <img src={props.img} alt="" className={s.works__photo} />
        <div className={s.works__content}>
          <div className={s.work__tittle}>{props.title}</div>
          <div className={s.work__text}>
            <a href={props.href} className={s.work__text__link} target="_blank">
              Узнать больше
            </a>
          </div>
        </div>
      </div>
      <h2>{props.title}</h2>
      <p className={s.posts__content}>{props.discription}</p>
    </div>
  );
};

export default Project;
