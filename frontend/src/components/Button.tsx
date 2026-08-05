import styles from "../css/Button.module.css"

export default function Button({generateBoardHandler}: any) {
    return (
        <button
            onClick={generateBoardHandler}
            className={styles.button}
        >
            Generiere Board
        </button>
    )
}