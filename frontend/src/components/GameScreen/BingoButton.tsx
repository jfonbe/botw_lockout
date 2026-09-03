import type { BoardTask } from "../../types/components"

import styles from "../../css/BingoButton.module.css"

type BingoButtonProps = {
    boardTask: BoardTask
    isDone: boolean
    onBoardStateChange: (row: number, col: number, isDone: boolean) => void
}

export default function BingoButton({ boardTask, isDone, onBoardStateChange}: BingoButtonProps) {
    const row = boardTask.placement.row
    const col = boardTask.placement.col
    const text = boardTask.text

    const clickHandler = () => {
        onBoardStateChange(row, col, !isDone)
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