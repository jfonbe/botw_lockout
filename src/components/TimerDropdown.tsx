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
        const dropdownRef = useRef<HTMLDivElement>(null)

        console.log(currentSetting)
        console.log(settings)

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
                <div>
                    <div
                        onClick={() => {
                            dropdownHandler(settings.options[0].value)
                        }}
                        className={`${styles.dropdownOption}}`}
                    >
                        {settings.options[0].label}
                    </div>
                    <div
                        onClick={() => {
                            dropdownHandler(settings.options[1].value)
                        }}
                        className={`${styles.dropdownOption}}`}
                    >
                        {settings.options[1].label}
                    </div>
                </div>
            )}
        </div>
    )
}