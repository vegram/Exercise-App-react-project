import { useState, useEffect } from "react";
import App from "../../App";

function DurationExercise({ name }) {
  // Track elapsed time in milliseconds
  const [time, setTime] = useState(0);

  // Track whether the timer is running
  const [running, setRunning] = useState(false);

  // Track whether to show the previous screen
  const [previous, setPrevious] = useState(false);

  // Time calculations
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  // Formatting time
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMilliseconds = String(milliseconds).padStart(3, "0");

  useEffect(() => {
    let timer = null;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [running]);

  /* Cleanup to prevent multiple timers
    Referenced React documentation:
    - Timers such as setInterval should be started inside useEffect
    and cleaned up with clearInterval to avoid memory leaks.
     https://react.dev/reference/react/useEffect
    */

  if (previous) {
    return (
      <div>
        <App />
      </div>
    );
  }

  return (
    <div>
      <h2>{name}</h2>

      <p>
        {formattedMinutes}:{formattedSeconds}:{formattedMilliseconds}
      </p>

      <button onClick={() => setRunning(true)}> Start </button>

      <button onClick={() => setRunning(false)}> Stop </button>

      <br />

      <button
        onClick={() => {
          setRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          if (!previous) {
            setPrevious(true);
          }
        }}
      >
        Return
      </button>
    </div>
  );
}

export default DurationExercise;
