import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Canvas } from "./components/Canvas";

const Stopwatch: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 1);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    } else if (milliseconds === 100) {
      setMilliseconds(0);
      setSeconds((prevSeconds) => prevSeconds + 1);
    }
  }, [seconds, milliseconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setIsRunning(false);
  };

  return (
    <div className={styles.app}>
      <h2>Simple Timer</h2>
      <Canvas
        isRunning={isRunning}
        milliseconds={milliseconds}
        seconds={seconds}
        minutes={minutes}
        handleReset={handleReset}
        handleStart={handleStart}
        handleStop={handleStop}
      />
    </div>
  );
};

export default Stopwatch;
