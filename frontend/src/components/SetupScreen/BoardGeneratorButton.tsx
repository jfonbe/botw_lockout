import styles from "../../css/BoardGeneratorButton.module.css"


type BoardGeneratorButtonProps = {
    startGameHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function BoardGeneratorButton({ startGameHandler }: BoardGeneratorButtonProps) {
    return (
        <button
            onClick={startGameHandler}
            className={styles.boardGeneratorButton}
        >
            Generiere Board
        </button>
    )
}