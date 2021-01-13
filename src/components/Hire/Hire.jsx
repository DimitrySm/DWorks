import s from "./Hire.module.css";
import Button from "../Button/Button";

const Hire = () => {
  return (
    <section className={s.hire}>
      <div className="container">
        <div className={s.hire__inner}>
          <h2>Рассматриваю варианты удаленной работы!</h2>
          <Button value={"Нанять меня"} />
        </div>
      </div>
    </section>
  );
};

export default Hire;
