import styles from "../../css/BoardGeneratorButton.module.css"

export default function BoardGeneratorButton({generateBoardHandler}: any) {
    return (
        <button
            onClick={generateBoardHandler}
            className={styles.boardGeneratorButton}
        >
            Generiere Board
        </button>
    )
}