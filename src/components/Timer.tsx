import { useEffect, useState } from "react"
import type { TimerSettings } from "../types/settings"

import styles from "../css/Timer.module.css"

type TimerProps = {
    mode: TimerSettings
}

export default function Timer({ mode }: TimerProps) {
    const [time, setTime] = useState(0)

    useEffect(() => {
        const start = performance.now()

        const interval = setInterval(() => {
            setTime(performance.now() - start)
        }, 10)

        return () => clearInterval(interval)
    }, [])

    const startTime = 3600000
    const lapsedTime = Math.max(
        mode === "count_down"
            ? startTime - time
            : time,
        0
    )

    const hours = Math.floor(lapsedTime / 3600000) % 24
    const minutes = Math.floor(lapsedTime / 60000) % 60
    const seconds = Math.floor(lapsedTime / 1000) % 60
    const milliseconds = Math.floor(lapsedTime / 100) % 10

    const format = (value: number) => {
        return Math.trunc(value).toString().padStart(2, "0")
    }

    const counterString = hours >= 1
        ? `${format(hours)}:${format(minutes)}:${format(seconds)}:${milliseconds}0`
        : `${format(minutes)}:${format(seconds)}:${milliseconds}0`

    return (
        <div
            className={styles.timer}
        >
            {counterString}
        </div>
    )
}