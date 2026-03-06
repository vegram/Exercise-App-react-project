import { useState } from "react";
import App from "../../App";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState(false);

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

      <p>{count} reps</p>

      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>

      <button onClick={() => setCount(count + 1)}> Increase </button>

      <br />

      <button onClick={() => setCount(0)}> Reset </button>

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

export default RepetitionExercise;
