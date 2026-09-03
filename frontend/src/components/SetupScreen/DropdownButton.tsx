import styles from "../../css/DropdownButton.module.css"


type DropdownButtonProps<T> = {
    value: T
    label: string,
    onChange: (value: T) => void,
}

export default function DropdownButton<T>({ value,  label, onChange }: DropdownButtonProps<T>) {
    return (
        <button
            onClick={() => onChange(value)}
            className={styles.dropdownButton}
        >
            {label}
        </button>
    )
}