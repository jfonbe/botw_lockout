import DropdownButton from "./DropdownButton"

import { timerInputOptions } from "../../data/timerInputOptions"

import type { TimerInput } from "../../types/settings"

import styles from "../../css/Dropdown.module.css"


type TimerOptionsProps = {
    onChange: (value: TimerInput) => void
    closeDropdown: () => void
}

export default function TimerOptions({ onChange, closeDropdown }: TimerOptionsProps) {
    return (
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
                        onChange={(value) => {
                            onChange(value)
                            closeDropdown()
                        }}
                        variant={"timer"}
                        key={option.value}
                    />
                )
            })}
        </div>
    )
}