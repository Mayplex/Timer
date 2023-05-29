import { DisplayProps } from "../types/Proptypes";
import styles from "./Display.module.css";

export const Display = (props: DisplayProps) => {
  return (
    <div className={styles.display}>
      {props.minutes.toString().padStart(2, "0")}:
      {props.seconds.toString().padStart(2, "0")}:
      {props.milliseconds.toString().padStart(2, "0")}
    </div>
  );
};
