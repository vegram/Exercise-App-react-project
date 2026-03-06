import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RecordIntensity from "./components/RecordDailyIntensity";

function App() {
  // Controls screen shown
  const [showExercise, setShowExercise] = useState(false);

  // Controls exercise type
  const [exerciseType, setExerciseType] = useState(null);
  const [exerciseName, setExerciseName] = useState("");

  // Screen 1
  if (!showExercise) {
    return (
      <div>
        <h1>Exercises</h1>

        <div>
          <h3>Repetition-based</h3>
          <button
            onClick={() => {
              setExerciseType("repetition");
              setShowExercise(true);
              setExerciseName("Push-ups");
            }}
          >
            Push-ups
          </button>

          <button
            onClick={() => {
              setExerciseType("repetition");
              setShowExercise(true);
              setExerciseName("Pull-ups");
            }}
          >
            Pull-ups
          </button>
        </div>

        <div>
          <h3>Duration-based</h3>
          <button
            onClick={() => {
              setExerciseType("duration");
              setShowExercise(true);
              setExerciseName("Running");
            }}
          >
            Running
          </button>

          <button
            onClick={() => {
              setExerciseType("duration");
              setShowExercise(true);
              setExerciseName("Plank");
            }}
          >
            Plank
          </button>
        </div>

        <div>
          <h3>Record Daily Intensity</h3>
          <button
            onClick={() => {
              setExerciseName("intensity");
              setShowExercise(true);
            }}
          >
            Record Intensity
          </button>
        </div>
      </div>
    );
  }

  // Screen 2
  if (exerciseType === "repetition") {
    return <RepetitionExercise name={exerciseName} />;
  }

  if (exerciseType === "duration") {
    return <DurationExercise name={exerciseName} />;
  }

  if (exerciseName === "intensity") {
    return <RecordIntensity />;
  }

  return null;
}

export default App;
