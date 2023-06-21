import s from "../../modules/StartPage.module.scss";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className={s.box}>
      <h2 className={s.title}>Welcome, to my Simple Timer App !</h2>
      <span className={s.subtitle}>
        To go to the Timer click <Link  className= {s.link} to="/timer">here</Link>
      </span>
    </div>
  );
};

export default StartPage;
