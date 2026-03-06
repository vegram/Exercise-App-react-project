import { useState } from "react";
import App from "../../App";

function RecordIntensity() {
  const [count, setCount] = useState(1);
  const [submissions, setSubmissions] = useState([]);
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
      <h2>Record Daily Intensity (1-10)</h2>

      <h3>{count}</h3>

      <button
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          if (count < 10) {
            setCount(count + 1);
          }
        }}
      >
        +
      </button>

      <br />

      <button onClick={() => setSubmissions([...submissions, count])}>
        Submit
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

      <h3>Previous Submissions</h3>

      <ul>
        {submissions.map((value, index) => (
          <li key={index}>Intensity: {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecordIntensity;
