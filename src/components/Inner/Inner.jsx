import s from "./Inner.module.css";
import mainBg from "../../assets/Img/main_bg.png";

const Inner = () => {
  return (
    <section className={s.inner}>
      <img src={mainBg} alt="" />
      <h1 className={s.inner__title}>
        Здравствуйте, меня зовут Дмитрий, и я Front-End разработчик
      </h1>
    </section>
  );
};

export default Inner;
