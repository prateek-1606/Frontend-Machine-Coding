import { useEffect, useMemo, useState } from "react";

import "./styles.css";

const CountdownTimer = () => {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const { hours, minutes, seconds } = useMemo(() => {
    let seconds = timerSeconds % 60;
    let minutes = Math.floor(timerSeconds / 60);
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    return {
      hours,
      minutes,
      seconds,
    };
  }, [timerSeconds]);

  useEffect(() => {
    if (isTimerRunning && timerSeconds > 0) {
      let timer = setTimeout(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
  }, [timerSeconds, isTimerRunning]);

  const handleHoursChange = (e) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value) || 0;
    setTimerSeconds(value * 3600 + minutes * 60 + seconds);
  };

  const handleMinutesChange = (e) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value) || 0;
    setTimerSeconds(hours * 3600 + value * 60 + seconds);
  };

  const handleSecondsChange = (e) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value) || 0;
    setTimerSeconds(hours * 3600 + minutes * 60 + value);
  };

  const handeReset = () => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          verticalAlign: "middle",
        }}
      >
        <div>
          <h3>Hours</h3>
          <input
            disabled={isTimerRunning}
            maxLength={2}
            placeholder="00"
            value={hours}
            onChange={handleHoursChange}
            style={{
              border: "none",
              textAlign: "center",
              fontSize: "32px",
              width: "40px",
            }}
          />
        </div>
        <div>
          <h3>Minutes</h3>
          <h2>
            <input
              disabled={isTimerRunning}
              maxLength={2}
              placeholder="00"
              value={minutes}
              onChange={handleMinutesChange}
              style={{
                border: "none",
                textAlign: "center",
                fontSize: "32px",
                width: "40px",
              }}
            />
          </h2>
        </div>
        <div>
          <h3>Seconds</h3>
          <h2>
            <input
              disabled={isTimerRunning}
              maxLength={2}
              placeholder="00"
              value={seconds}
              onChange={handleSecondsChange}
              style={{
                border: "none",
                textAlign: "center",
                fontSize: "32px",
                width: "40px",
              }}
            />
          </h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button onClick={() => setIsTimerRunning(!isTimerRunning)}>
          {isTimerRunning ? "Pause" : "Continue"}
        </button>
        <button onClick={handeReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
