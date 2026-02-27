import { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>

      <p>{count} reps</p>

      <button onClick={() => setCount(count + 1)}> Increase </button>

      <button onClick={() => {
        if (count > 0) {
          setCount(count - 1);
        }
      }}> Decrease </button>

      <button onClick={() => setCount(0)}> Reset </button>
    </div>
  );
}

export default RepetitionExercise;