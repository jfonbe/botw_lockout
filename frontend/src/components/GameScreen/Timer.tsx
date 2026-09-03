import { useEffect, useState } from "react"

import type { TimerInput } from "../../types/settings"

import styles from "../../css/Timer.module.css"


type TimerProps = {
    timerSettings: TimerInput
}

export default function Timer({ timerSettings }: TimerProps) {
    const [time, setTime] = useState(0)

    useEffect(() => {
        const start = performance.now()

        const interval = setInterval(() => {
            setTime(performance.now() - start)
        }, 100)

        return () => clearInterval(interval)
    }, [])

    const elapsedTime = Math.max(
        timerSettings.variant === "count_down" && timerSettings.time
            ? 3600000 * timerSettings.time - time
            : time,
        0
    )

    const hours = Math.floor(elapsedTime / 3600000) % 24
    const minutes = Math.floor(elapsedTime / 60000) % 60
    const seconds = Math.floor(elapsedTime / 1000) % 60
    const milliseconds = Math.floor(elapsedTime / 100) % 10

    const format = (value: number) => {
        return Math.trunc(value).toString().padStart(2, "0")
    }

    const counterString = hours >= 1
        ? `${format(hours)}:${format(minutes)}:${format(seconds)}:${milliseconds}0`
        : `${format(minutes)}:${format(seconds)}:${milliseconds}0`

    return (
        <div
            className={styles.timerContainer}
        >
            <span className={styles.timer}>{counterString}</span>
        </div>
    )
}