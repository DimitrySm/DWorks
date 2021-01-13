import s from "./Footer.module.css";
import facebook from "../../assets/Img/facebook.png";
import instagram from "../../assets/Img/instagram.png";
import twitter from "../../assets/Img/twitter.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={s.footer__inner}>
          <div className={s.instruction}>
            <span>Все права защищены</span>
          </div>
          <div className={s.social}>
            <span>Follow</span>
            <span>
              <a href="#4">
                <img src={facebook} alt="" />
              </a>
            </span>
            <span>
              <a href="4">
                <img src={twitter} alt="" />
              </a>
            </span>
            <span>
              <a href="4">
                <img src={instagram} alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
