import styles from "../../css/PointCounter.module.css"

type PointCounterProps = {
    points: number
}

export default function PointCounter({points}: PointCounterProps) {
    return (
        <div className={styles.pointCounter}>
            <span className={styles.text}>Player: {points}</span>
        </div>
    )
}