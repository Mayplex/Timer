import { Button } from "@mui/material";
import { ButtonProps } from "../types/Proptypes";

export const Buttons = (props: ButtonProps) => {
  return (
    <div>
      {props.minutes === 0 &&
      props.seconds === 0 &&
      props.milliseconds === 0 ? (
        <Button variant="outlined" onClick={props.handleStart}>
          Start
        </Button>
      ) : (
        <div style={{ display: "flex", gap: "10px" }}>
          {props.isRunning ? (
            <Button variant="outlined" onClick={props.handleStop}>
              Stop
            </Button>
          ) : (
            <Button variant="outlined" onClick={props.handleStart}>
              Resume
            </Button>
          )}
          <Button variant="outlined" onClick={props.handleReset}>
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};
