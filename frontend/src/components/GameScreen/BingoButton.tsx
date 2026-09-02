import type { BoardTask } from "../../types/components"

import styles from "../../css/BingoButton.module.css"
import { useState } from "react"

type BingoButtonProps = {
    boardTask: BoardTask,
    onBoardStateChange: (row: number, col: number, isDone: boolean) => void,
}

export default function BingoButton({ boardTask, onBoardStateChange}: BingoButtonProps) {
    const [isDone, setIsDone] = useState<boolean>(false)

    const row = boardTask.placement.row
    const col = boardTask.placement.col
    const text = boardTask.text

    const clickHandler = () => {
        onBoardStateChange(row, col, !isDone)
        setIsDone(!isDone)
    }

    return (
        <>
            <button
                onClick={clickHandler}
                className={`${styles.bingoButton} ${isDone ? styles.active : ""}`}
            >
                <span
                    className={styles.text}
                >
                    {text}
                </span>
            </button>
        </>
    )
}