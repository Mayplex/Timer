import React, { useState, useEffect } from "react";
import s from "./modules/App.module.scss";
import StartPage from "./components/pages/StartPage";
import { Route, Routes } from "react-router-dom";
import TimerPage from "./components/pages/TimerPage";

const App: React.FC = () => {
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
    <div className={s.app}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/timer"
          element={
            <TimerPage
              handleStop={handleStop}
              handleStart={handleStart}
              handleReset={handleReset}
              isRunning={isRunning}
              minutes={minutes}
              seconds={seconds}
              milliseconds={milliseconds}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
