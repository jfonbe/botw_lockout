import React, { useState, useRef, useEffect } from "react"
import type { DropdownSettings } from "../types/components"
import styles from "../css/Dropdown.module.css"

type DropdownProps<T> = {
    settings: DropdownSettings<T>,
    dropdownHandler: (value: T) => void,
    currentSetting: T,
    getValueKey: (value: T) => React.Key
    variant:
        | "grid"
        | "difficulty"
        | "timer"
}

export default function Dropdown<T> ({settings, dropdownHandler, currentSetting, getValueKey, variant}: DropdownProps<T>) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const clickHanlder = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsOpen(!isOpen)
    }

    const currentOption = settings.options.find(
        option => getValueKey(option.value) === getValueKey(currentSetting)
    )

    return (
        <div
            ref={dropdownRef}
            className={styles.dropdown}>
            <label
                className={styles.label}
            >{settings.title}</label>
            <button
                onClick={clickHanlder}
                className={styles.button}
            >
                {currentOption?.label ?? settings.title}
            </button>

            {isOpen && (
                <div
                    className={styles.dropdownMenu}
                >
                    {settings.options.map((option => (
                        <div
                            key={getValueKey(option.value)}
                            onClick={() => {
                                dropdownHandler(option.value)
                                setIsOpen(false)
                            }}
                            className={`${styles.dropdownOption} ${styles[variant]}`}
                        >
                            {option.label}
                        </div>
                    )))}
                </div>
            )}
        </div>
    )
}