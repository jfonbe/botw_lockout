import BingoButton from "../GameScreen/BingoButton"

import type { BoardTask } from "../../types/components"

import styles from "../../css/BingoGrid.module.css"


type BingoGridProps = {
    boardTasks: BoardTask[][]
    boardState: boolean[][]
    onBoardStateChange: (row: number, col: number, isDone: boolean) => void
}

export default function BingoGrid({ boardTasks, boardState, onBoardStateChange }: BingoGridProps) {
    return (
        <div
            className={styles.bingoGrid}
        >
            {boardTasks.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.gridRow}>
                    {row.map((boardTask, colIndex) => {
                        return <BingoButton
                            key={`${rowIndex}x${colIndex}`}
                            boardTask={boardTask}
                            placement={{ row: rowIndex, col: colIndex }}
                            isDone={boardState[rowIndex][colIndex]}
                            onBoardStateChange={onBoardStateChange}
                        />
                    })}
                </div>
            ))}
        </div>
    )
}