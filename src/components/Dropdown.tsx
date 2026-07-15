import { useState } from "react"

type DropdownVariant =
    | "grid-settings"
    | "difficulty-settings"
    | "timer-settings"

type DropdownProps = {
    variant: DropdownVariant
}

export default function Dropdown({variant}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownData = {
        "grid-settings": {
            title: "Grid",
            options: ["5x5", "4x4", "3x3"]
        },
        "difficulty-settings": {
            title: "Difficulty",
            options: ["Leicht", "Mittel", "Schwer"]
        },
        "timer-settings": {
            title: "Timer",
            options: ["Hochzählen", "Runterzählen"]
        }
    }

    const dropdown = dropdownData[variant]

    const clickHanlder = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown-container">
            <button
                onClick={clickHanlder}
                className="btn_settings"
            >
                {dropdown.title}
            </button>

            {isOpen && (
                <>
                    {dropdown.options.map((option => (
                        <div key={option}>{option}</div>
                    )))}
                </>
            )}
        </div>
    )
}