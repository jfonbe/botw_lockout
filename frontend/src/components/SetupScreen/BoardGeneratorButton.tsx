import styles from "../../css/BoardGeneratorButton.module.css"


type BoardGeneratorButtonProps = {
    onStartGame: () => void
}

export default function BoardGeneratorButton({ onStartGame }: BoardGeneratorButtonProps) {
    return (
        <button
            onClick={onStartGame}
            className={styles.boardGeneratorButton}
        >
            Generiere Board
        </button>
    )
}