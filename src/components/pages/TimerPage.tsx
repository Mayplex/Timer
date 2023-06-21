import { TimerPageProps } from "../../types/Types";
import s from "../../modules/TimerPage.module.scss";

const TimerPage = (props: TimerPageProps) => {
  const {
    seconds,
    minutes,
    milliseconds,
    handleReset,
    handleStart,
    handleStop,
    isRunning,
  } = props;

  const formattedMinutes = minutes?.toString().padStart(2, "0");
  const formattedSeconds = seconds?.toString().padStart(2, "0");
  const formattedMilliseconds = milliseconds?.toString().padStart(2, "0");

  const isEmptyTime = minutes === 0 && seconds === 0 && milliseconds === 0;

  return (
    <>
      <div className={s.digits}>
        {formattedMinutes}
        <span className={s.text}>min</span>
        {formattedSeconds}
        <span className={s.text}>sec</span>
        {formattedMilliseconds}
        <span className={s.text}>ms</span>
      </div>

      <div>
        {isEmptyTime ? (
          <button className={s.button} onClick={handleStart}>
            Start
          </button>
        ) : (
          <div style={{ display: "flex", gap: "15px" }}>
            <button
              className={s.button}
              onClick={isRunning ? handleStop : handleStart}
            >
              {isRunning ? "Stop" : "Resume"}
            </button>
            <button className={s.button} onClick={handleReset}>
              Reset
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TimerPage;
