import styles from "../../css/DropdownButton.module.css"


type DropdownButtonProps<T> = {
    value: T
    label: string,
    dropdownHandler: (value: T) => void,
    variant: "grid" | "difficulty" | "timer"
    setIsOpen: (value: boolean) => void,
    setIsVisible: (value: boolean) => void,
    closeOnSelect: boolean
}

export default function DropdownButton<T>({ value,  label, dropdownHandler, variant, setIsOpen, setIsVisible, closeOnSelect }: DropdownButtonProps<T>) {
    return (
        <button
            onClick={() => {
                dropdownHandler(value)
                if (closeOnSelect) {
                    setIsVisible(false)
                    setTimeout(() => {
                        setIsOpen(false)
                    }, 100)
                }
            }}
            className={`${styles.dropdownButton} ${styles[variant]}`}
        >
            { label }
        </button>
    )
}