export type TimerPageProps = {
  handleStop?: () => void;
  handleStart?: () => void;
  handleReset?: () => void;
  isRunning?: boolean;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
};
