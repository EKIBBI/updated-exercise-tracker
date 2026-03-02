import { useState } from "react"
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"
import RunningExercise from "./components/RunningExercise";

export default function App() {

  const [selectedExercise, setSelectedExercise] = useState(null)

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Running", type: "running" }
  ]


  if (!selectedExercise) {
    return (
      <div>
        <h1>Get Active</h1>
        {exercises.map((exercise, index) => (
          <button
            key={index}
            onClick={() => setSelectedExercise(exercise)}
          >
            {exercise.name}
          </button>
        ))}
      </div>
    )
  }

  // If exercise selected → show correct component
  if (selectedExercise.type === "repetition") {
    return (
      <RepetitionExercise name={selectedExercise.name} />
    )
  }

  if (selectedExercise.type === "duration") {
    return (
      <DurationExercise name={selectedExercise.name} />
    )
  }

  if (selectedExercise.type === "running") {
  return <RunningExercise name={selectedExercise.name} />
  }
}