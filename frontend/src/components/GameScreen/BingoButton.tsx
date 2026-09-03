import type { BoardTask } from "../../types/components"

import styles from "../../css/BingoButton.module.css"

type BingoButtonProps = {
    boardTask: BoardTask
    placement: { row: number, col: number }
    isDone: boolean
    onBoardStateChange: (row: number, col: number, isDone: boolean) => void
}

export default function BingoButton({ boardTask, placement, isDone, onBoardStateChange}: BingoButtonProps) {
    const clickHandler = () => {
        onBoardStateChange(placement.row, placement.col, !isDone)
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
                    {boardTask.text}
                </span>
            </button>
        </>
    )
}