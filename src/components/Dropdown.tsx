import React, { useState, useRef, useEffect } from "react"
import type { DropdownOptions } from "../types/components"
import styles from "../css/Dropdown.module.css"

type DropdownProps<T> = {
    inputOptions: DropdownOptions<T>,
    dropdownHandler: (value: T) => void,
    currentInput: T,
    getValueKey: (value: T) => React.Key
    variant:
        | "grid"
        | "difficulty"
        | "timer",
}

export default function Dropdown<T> ({inputOptions, dropdownHandler, currentInput, getValueKey, variant}: DropdownProps<T>) {
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

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    const currentOption = inputOptions.options.find(
        option => getValueKey(option.value) === getValueKey(currentInput)
    )

    return (
        <div
            ref={dropdownRef}
            className={styles.dropdown}>
            <label
                className={styles.label}
            >{inputOptions.title}</label>
            <button
                onClick={clickHandler}
                className={styles.button}
            >
                {currentOption?.label ?? inputOptions.title}
            </button>

            {isOpen && (
                <div
                    className={styles.dropdownMenu}
                >
                    {inputOptions.options.map((option => (
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