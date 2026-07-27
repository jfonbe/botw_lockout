import { useEffect, useState } from "react"
import type { TimerSettings } from "../types/settings"

type TimerProps = {
    timerSettings: TimerSettings
}

export default function Timer({ timerSettings }: TimerProps) {
    const [time, setTime] = useState(0)

    console.log(timerSettings)

    useEffect(() => {
        const start = performance.now()

        const interval = setInterval(() => {
            setTime(performance.now() - start)
        }, 10)

        return () => clearInterval(interval)
    }, [])

    const hours = (time / 3600000) % 24
    const minutes = Math.floor(time / 60000) % 60
    const seconds = Math.floor(time / 1000) % 60
    const milliseconds = Math.floor(time / 100) % 10

    const format = (value: number) => {
        return Math.trunc(value).toString().padStart(2, "0")
    }

    const counterString = hours >= 1
        ? `${format(hours)}:${format(minutes)}:${format(seconds)}:${milliseconds}0`
        : `${format(minutes)}:${format(seconds)}:${milliseconds}0`

    return (
        <div>{counterString}</div>
    )
}