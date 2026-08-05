import { useState, useRef, useEffect } from "react"

import type { TimerInput } from "../types/settings"
import type { DropdownOptions, Options } from "../types/components"

import { timerInputOptions } from "../data/timerInputOptions"

type TimerDropdownProps = {
    inputOptions: DropdownOptions<TimerInput>,
    dropdownHandler: (value: TimerInput) => void,
    currentInput: TimerInput,
    getValueKey: (value: TimerInput) => React.Key,
}

import styles from "../css/Dropdown.module.css"
import DropdownButton from "./DropdownButton"

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

    const showTimerLabel = (input: TimerInput, option: typeof currentOption) => {
        if (input.variant === "count_down") {
            return input.time ?
                `${option?.label} (${input.time}H)` :
                `${option?.label}`
        }
        else {
            return `${option?.label}`
        }
    }

    return (
        <div
            ref={dropdownRef}
            className={styles.dropdown}>
            <label
                className={styles.label}
            >{inputOptions.title}</label>
            <button
                onClick={clickHandler}
                className={styles.dropdownInput}
            >
                {showTimerLabel(currentInput, currentOption)}
            </button>

            {isOpen && (
                <div
                    className={styles.dropdownMenu}
                >
                    {inputOptions.options.map((option => (
                        <DropdownButton
                            value={option.value}
                            label={option.label}
                            dropdownHandler={dropdownHandler}
                            variant={"timer"}
                            setIsOpen={setIsOpen}
                            closeOnSelect={false}
                            key={option.label}
                        />
                    )))}
                    {currentInput.variant === "count_down" && (
                        <div
                            className={styles.timeDropdownMenu}
                        >
                            {timerInputOptions.map((option) => {
                                const newVal: TimerInput = {
                                    variant: "count_down",
                                    time: option.value
                                }
                                return (
                                    <DropdownButton
                                        value={newVal}
                                        label={option.label}
                                        dropdownHandler={dropdownHandler}
                                        variant={"timer"}
                                        setIsOpen={setIsOpen}
                                        closeOnSelect={true}
                                        key={option.value}
                                    />
                                )
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}