import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  // Controls screen shown
  const [showExercise, setShowExercise] = useState(false);

  // Controls exercise type
  const [exerciseType, setExerciseType] = useState(null);

  // Screen 1
  if (!showExercise) {
    return (
      <div>
        <h1>Exercises</h1>

        <button
          onClick={() => {
            setExerciseType("repetition");
            setShowExercise(true);
          }}>
          Push-ups
        </button>

        <button
          onClick={() => {
            setExerciseType("duration");
            setShowExercise(true);
          }}>
          Running
        </button>
      </div>
    );
  }

  // Screen 2
  if (exerciseType === "repetition") {
    return <RepetitionExercise name="Push-ups" />;
  }

  if (exerciseType === "duration") {
    return <DurationExercise name="Running" />;
  }

  return null;
}

export default App;