import { useState } from "react"
import type { DropdownSettings } from "../types/components"

type DropdownProps<T> = {
    settings: DropdownSettings<T>,
    dropdownHandler: (value: T) => void
}

export default function Dropdown<T> ({settings, dropdownHandler}: DropdownProps<T>) {
    const [isOpen, setIsOpen] = useState(false)

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
                {settings.title}
            </button>

            {isOpen && (
                <>
                    {settings.options.map((option => (
                        <div key={option} onClick={() => dropdownHandler(option)}>{option.rows}x{option.rows}</div>
                    )))}
                </>
            )}
        </div>
    )
}