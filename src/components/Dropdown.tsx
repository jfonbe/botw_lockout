import React, { useState } from "react"
import type { DropdownSettings } from "../types/components"

type DropdownProps<T> = {
    settings: DropdownSettings<T>,
    dropdownHandler: (value: T) => void,
    getKey: (value: T) => React.Key
}

export default function Dropdown<T> ({settings, dropdownHandler, getKey}: DropdownProps<T>) {
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
                        <div
                            key={getKey(option.value)}
                            onClick={() => dropdownHandler(option.value)}
                        >
                            {option.label}
                        </div>
                    )))}
                </>
            )}
        </div>
    )
}