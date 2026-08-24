import type { BoardTask } from "../../types/components"

import styles from "../../css/BingoButton.module.css"
import { useState } from "react"

type BingoButtonProps = {
    boardTask: BoardTask,
    updateActivity: (row: number, col: number, isDone: boolean) => void,
    buttonCount: number
}

export default function BingoButton({ boardTask, updateActivity, buttonCount}: BingoButtonProps) {
    const [isDone, setIsDone] = useState<boolean>(false)

    const row = boardTask.placement.row
    const col = boardTask.placement.col
    const text = boardTask.text

    let className

    if (buttonCount <= 9) {
        className = "big"
    } else if (buttonCount > 25) {
        className = "small"
    } else {
        className = "normal"
    }

    const clickHandler = () => {
        updateActivity(row, col, !isDone)
        setIsDone(!isDone)
    }

    return (
        <>
            <button
                onClick={clickHandler}
                className={`${styles.bingoButton} ${isDone ? styles.active : ""} ${styles[className]}`}
            >{text}</button>
        </>
    )
}