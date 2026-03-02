import React, { useState } from "react";

const RunningExercise = () => {
  const [laps, setLaps] = useState([]);
  const [startTime] = useState(Date.now());

  const recordLap = () => {
    const currentTime = Date.now();
    const lapTime = ((currentTime - startTime) / 1000).toFixed(2);
    setLaps([...laps, lapTime]);
  };

  return (
    <div>
      <h2>Running Exercise</h2>
      
      <button onClick={recordLap}>
        Record Lap
      </button>

      <h3>Laps</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {lap} seconds
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunningExercise;