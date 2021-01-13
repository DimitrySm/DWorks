import Button from "../Button/Button";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={s.contact}>
      <div className="container">
        <div className={s.contact__inner}>
          <h2>Связаться со мной</h2>
          <form action="" method="post">
            <div className={s.form__inputs}>
              <input type="name" name="name" placeholder="Ваше имя" />
              <input type="email" name="email" placeholder="Ваш Email" />
              <input type="tel" name="phone" placeholder="Ваш телефон" />
            </div>
            <div className={s.form__textarea}>
              <textarea
                className={s.contact__comment}
                name="textarea"
                placeholder="Ваше сообщение"
              ></textarea>
              <Button value={"Отправить"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
