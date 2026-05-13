import React, { useEffect, useRef, useState } from "react";

// 1. Initially the stopwatch should display 00:00:00 (hours:minutes:seconds).
// 2. There should be a Start button to start the stopwatch, and a Stop button to stop it.
// 3. When the Start button is clicked, the stopwatch should start counting up from 00:00:00.
// 4. When the Stop button is clicked, the stopwatch should stop counting and display the current time.
// 5. There should be a Resume button to resume the stopwatch from where it was stopped.
// 6. There should also be a Reset button to reset the stopwatch back to 00:00:00.
const StopWatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState(0);

  const intervalRef = useRef(null);

  const renderTime = () => {
    const tempHours = hours < 10 ? `0${hours}` : hours;
    const tempMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const tempSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return { hours: tempHours, minutes: tempMinutes, seconds: tempSeconds };
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((prev) => prev + 1);
    }
  }, [minutes]);

  const handleStart = () => {
    setStatus(1);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    setStatus(2);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setStatus(0);
    clearInterval(intervalRef.current);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="border p-2 w-40 h-40 rounded-2xl flex flex-col justify-center items-center gap-4">
      <div className="text-2xl font-bold">
        {renderTime().hours}:{renderTime().minutes}:{renderTime().seconds}
      </div>
      <div className="flex justify-between gap-2">
        {status === 0 || status === 2 ? (
          <button
            className="bg-green-400 cursor-pointer p-2 rounded-2xl"
            onClick={handleStart}
          >
            Start
          </button>
        ) : null}
        {status === 1 ? (
          <button
            className="bg-red-400 cursor-pointer p-2 rounded-2xl"
            onClick={handleStop}
          >
            Stop
          </button>
        ) : null}
        {status === 1 || status === 2 ? (
          <button
            className="bg-blue-400 cursor-pointer p-2 rounded-2xl"
            onClick={handleReset}
          >
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default StopWatch;
