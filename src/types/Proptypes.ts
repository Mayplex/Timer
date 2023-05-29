export type ButtonProps = {
  handleStop: () => void;
  handleStart: () => void;
  handleReset: () => void;
  isRunning: boolean;
  minutes: number;
  seconds: number;
  milliseconds: number;
};
export type DisplayProps = {
  minutes: number;
  seconds: number;
  milliseconds: number;
};
export type CanvasProps = {
  handleStop: () => void;
  handleStart: () => void;
  handleReset: () => void;
  milliseconds: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
};
