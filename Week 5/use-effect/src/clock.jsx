import { useState, useEffect } from "react";

function RealTimeClock() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [format24Hour, setFormat24Hour] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // Re-run effect when isRunning changes

  // Update documents title with current time
  useEffect(() => {
    document.title = `Clock - ${formatTime(time)}`;

    // Cleanup: Reset title when componenet unmounts
    return () => {
      document.title = "React App";
    };
  }, [time, format24Hour]);

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !format24Hour,
    };
    return date.toLocaleTimeString("en-US", options);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="clock-container">
      <div className="date">{formatDate(time)}</div>
      <div className="time">{formatTime(time)}</div>

      <div className="controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Resume"}
        </button>
        <label>
          <input
            type="checkbox"
            checked={format24Hour}
            onChange={(e) => setFormat24Hour(e.target.checked)}
          />
        </label>
      </div>

      <div className="Status">Clock is {isRunning ? "running" : paused}</div>
    </div>
  );
}

export default RealTimeClock;
