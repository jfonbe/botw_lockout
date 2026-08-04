import { useState, useRef, useEffect } from "react"

import type { TimerInput } from "../types/settings"
import type { DropdownOptions } from "../types/components"

import { timerInputOptions } from "../data/timerInputOptions"

type TimerDropdownProps = {
    inputOptions: DropdownOptions<TimerInput>,
    dropdownHandler: (value: TimerInput) => void,
    currentInput: TimerInput,
    getValueKey: (value: TimerInput) => React.Key,
}

import styles from "../css/Dropdown.module.css"

export default function TimerDropdown ({ inputOptions, dropdownHandler, currentInput, getValueKey }: TimerDropdownProps) {
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
                            className={`${styles.dropdownOption} ${styles.timer}`}
                            onClick={() => {
                                dropdownHandler(option.value)
                                if (option.value.variant === "count_up") {
                                    setIsOpen(false)
                                }
                            }}
                        >
                            {option.label}
                        </div>
                    )))}
                    {currentInput.variant === "count_down" && (
                        <div
                            className={styles.timerDropdownMenu}
                        >
                            {timerInputOptions.map((option) => {
                                const newVal: TimerInput = {
                                    variant: "count_down",
                                    time: option.value
                                }
                                return (
                                    <button
                                        key={option.value}
                                        className={`${styles.dropdownOption} ${styles.timerButton}`}
                                        onClick={() => {
                                            dropdownHandler(newVal)
                                            setIsOpen(false)
                                        }}
                                    >
                                        {option.label}
                                    </button>
                                )
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}