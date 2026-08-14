import styles from "../../css/DropdownButton.module.css"

type DropdownButtonProps<T> = {
    value: T
    label: string,
    dropdownHandler: (value: T) => void,
    variant: "grid" | "difficulty" | "timer"
    setIsOpen: (value: boolean) => void,
    closeOnSelect: boolean
}

export default function DropdownButton<T>({ value,  label, dropdownHandler, variant, setIsOpen, closeOnSelect }: DropdownButtonProps<T>) {
    return (
        <button
            onClick={() => {
                dropdownHandler(value)
                if (closeOnSelect) {
                    setIsOpen(false)
                }
            }}
            className={`${styles.dropdownButton} ${styles[variant]}`}
        >
            { label }
        </button>
    )
}