import { Display } from "./Display";
import styles from "./Canvas.module.css";
import { Buttons } from "./Buttons";
import { CanvasProps } from "../types/Proptypes";

export const Canvas = (props: CanvasProps) => {
  return (
    <div className={styles.canvas}>
      <Display
        minutes={props.minutes}
        seconds={props.seconds}
        milliseconds={props.milliseconds}
      />
      <Buttons
        minutes={props.minutes}
        seconds={props.seconds}
        milliseconds={props.milliseconds}
        isRunning={props.isRunning}
        handleStop={props.handleStop}
        handleStart={props.handleStart}
        handleReset={props.handleReset}
      />
    </div>
  );
};
