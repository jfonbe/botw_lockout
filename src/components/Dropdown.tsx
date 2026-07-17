import React, { useState } from "react"
import type { DropdownSettings } from "../types/components"

type DropdownProps<T> = {
    settings: DropdownSettings<T>,
    dropdownHandler: (value: T) => void,
    renderOption: (value: T) => React.ReactNode,
    getKey: (value: T) => React.Key
}

export default function Dropdown<T> ({settings, dropdownHandler, renderOption, getKey}: DropdownProps<T>) {
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
                            key={getKey(option)}
                            onClick={() => dropdownHandler(option)}
                        >
                            {renderOption(option)}
                        </div>
                    )))}
                </>
            )}
        </div>
    )
}