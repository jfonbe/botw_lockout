import { useState } from "react"
import type { DropdownSettings, VariantSettings } from "../types/settings"

type DropdownProps = {
    settings: DropdownSettings,
    variant: VariantSettings
}

export default function Dropdown({settings, variant}: DropdownProps) {
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
                        <div key={option} className={variant}>{option}</div>
                    )))}
                </>
            )}
        </div>
    )
}