import { useState, useEffect } from "react"

export default function DurationExercise({ name }) {

  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval = null

    if (running) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    }

    return () => clearInterval(interval)

  }, [running])

  // Format time
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  const paddedMinutes = String(minutes).padStart(2, "0")
  const paddedSeconds = String(remainingSeconds).padStart(2, "0")

  return (
    <div>
      <h1>{name}</h1>

      <h2>{paddedMinutes}:{paddedSeconds}</h2>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => {
        setRunning(false)
        setSeconds(0)
      }}>
        Reset
      </button>
    </div>
  )
}