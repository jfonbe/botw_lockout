import styles from "../../css/DropdownButton.module.css"


type DropdownButtonProps<T> = {
    value: T
    label: string,
    onChange: (value: T) => void,
    variant: "grid" | "difficulty" | "timer"
    setIsOpen: (value: boolean) => void,
    closeOnSelect: boolean
}

export default function DropdownButton<T>({ value,  label, onChange, variant, setIsOpen, closeOnSelect }: DropdownButtonProps<T>) {
    return (
        <button
            onClick={() => {
                onChange(value)
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