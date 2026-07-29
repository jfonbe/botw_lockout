import { useState, useRef, useEffect} from "react"
import type { TimerSettings } from "../types/settings"
import type { DropdownSettings } from "../types/components"

import styles from "../css/Dropdown.module.css"

type TimerDropdownProps = {
    settings: DropdownSettings<TimerSettings>,
    dropdownHandler: (value: TimerSettings) => void,
    currentSetting: TimerSettings,
    getValueKey: (value: TimerSettings) => React.Key
}

export default function TimerDropdown ({ settings, dropdownHandler, currentSetting, getValueKey }: TimerDropdownProps) {

        const [isOpen, setIsOpen] = useState(false)
        const [isVisible, setIsVisible] = useState(false)
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
                {currentOption?.label ?? settings.title} {currentSetting.variant === "count_down"
                    ? `${currentSetting.time}h`
                    : ""}
            </button>

            {isOpen && (
                <div
                    className={styles.dropdownMenu}
                >
                    <div
                        onClick={() => {
                            dropdownHandler(settings.options[0].value)
                            setIsOpen(false)
                            setIsVisible(false)
                        }}
                        className={`${styles.dropdownOption} ${styles.timer}`}
                    >
                        {settings.options[0].label}
                    </div>
                    <div
                        onClick={() => {
                            setIsVisible(true)
                        }}
                        className={`${styles.dropdownOption} ${styles.timer}`}
                    >
                        {settings.options[1].label}
                    </div>
                    {isVisible && (
                        <div
                            className={styles.buttonContainer}
                        >
                            {settings.options.slice(1).map((option => (
                                <div
                                    key={getValueKey(option.value)}
                                    onClick={() => {
                                        dropdownHandler(option.value)
                                        setIsOpen(false)
                                    }}
                                    className={`${styles.dropdownOption} ${styles.timeButton}`}
                                >
                                    {option.value.time}h
                                </div>
                            )))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}