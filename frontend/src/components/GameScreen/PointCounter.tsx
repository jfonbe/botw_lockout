import { useState } from "react"
import styles from "../../css/PointCounter.module.css"

type PointCounterProps = {
    points: number
    lineCount: number
}

export default function PointCounter({points, lineCount}: PointCounterProps) {
    const [showLines, setShowLines] = useState<boolean>(false)

    return (
        <button
            className={styles.pointCounter}
            onClick={() => setShowLines(prev => !prev)}
        >
            {showLines
                ? <span className={styles.text}>Player: {lineCount} <span className={styles.pointType}>Reihen</span></span>
                : <span className={styles.text}>Player: {points} <span className={styles.pointType}>Punkte</span></span>
            }

        </button>
    )
}