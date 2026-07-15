import { useState } from "react"
import type { DropdownSettings, GridSettings, DifficultySettings, TimerSettings, VariantSettings } from "../types/settings"

type HandlerValue =
    | ((value: GridSettings) => void)
    | ((value: DifficultySettings) => void)
    | ((value: TimerSettings) => void)

type DropdownProps = {
    settings: DropdownSettings,
    dropdownHandler: HandlerValue,
    variant: VariantSettings
}

export default function Dropdown({settings, dropdownHandler, variant}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)

    const clickHanlder = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsOpen(!isOpen)
    }

    console.log(settings.options)

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
                        <div key={option} className={variant} onClick={() => dropdownHandler(option)}>{option}</div>
                    )))}
                </>
            )}
        </div>
    )
}