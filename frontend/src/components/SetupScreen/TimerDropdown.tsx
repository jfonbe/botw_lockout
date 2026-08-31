import { useState, useRef, useEffect } from "react"

import DropdownButton from "./DropdownButton"

import { timerInputOptions } from "../../data/timerInputOptions"

import type { TimerInput } from "../../types/settings"
import type { DropdownOptions } from "../../types/components"

import styles from "../../css/Dropdown.module.css"


type TimerDropdownProps = {
    inputOptions: DropdownOptions<TimerInput>,
    onChange: (value: TimerInput) => void,
    currentInput: TimerInput,
    getValueKey: (value: TimerInput) => React.Key,
}

export default function TimerDropdown ({ inputOptions, onChange, currentInput, getValueKey }: TimerDropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsVisible(false)
                setTimeout(() => {
                    setIsOpen(false)
                }, 100)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const clickHandler = () => {
        setIsVisible(!isVisible)

        if(isOpen) {
            setTimeout(() => {
                setIsOpen(!isOpen)
            }, 100)
        } else {
            setIsOpen(!isOpen)
        }
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
                    className={`${styles.dropdownMenu} ${isVisible ? styles.visible : styles.hidden}`}
                >
                    {inputOptions.options.map((option => (
                        <DropdownButton
                            value={option.value}
                            label={option.label}
                            onChange={onChange}
                            variant={"timer"}
                            setIsOpen={setIsOpen}
                            setIsVisible={setIsVisible}
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
                                        onChange={onChange}
                                        variant={"timer"}
                                        setIsOpen={setIsOpen}
                                        setIsVisible={setIsVisible}
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