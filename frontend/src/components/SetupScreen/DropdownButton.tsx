import styles from "../../css/DropdownButton.module.css"


type DropdownButtonProps<T> = {
    value: T
    label: string,
    onChange: (value: T) => void,
    variant: "grid" | "difficulty" | "timer"
}

export default function DropdownButton<T>({ value,  label, onChange, variant }: DropdownButtonProps<T>) {
    return (
        <button
            onClick={() => onChange(value)}
            className={`${styles.dropdownButton} ${styles[variant]}`}
        >
            {label}
        </button>
    )
}