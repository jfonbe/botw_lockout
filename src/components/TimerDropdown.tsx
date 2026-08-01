import { useState } from "react"
import Dropdown from "./Dropdown"

import type { TimerInput } from "../types/settings"
import type { DropdownOptions } from "../types/components"

import { timerInputOptions } from "../data/timerInputOptions"

type TimerDropdownProps = {
    inputOptions: DropdownOptions<TimerInput>,
    dropdownHandler: (value: TimerInput) => void,
    currentInput: TimerInput,
    getValueKey: (value: TimerInput) => React.Key,
        variant:
        | "grid"
        | "difficulty"
        | "timer",
}

export default function TimerDropdown ({ inputOptions, dropdownHandler, currentInput, getValueKey, variant, closeDropdownHandler }: TimerDropdownProps) {
    const [timerVariant, setTimerVariant] = useState<TimerInput>({ variant: "count_up" })

    return (
        <>
            <Dropdown<TimerInput>
                inputOptions={inputOptions}
                dropdownHandler={setTimerVariant}
                currentInput={currentInput}
                getValueKey={getValueKey}
                variant={variant}
                closeOnSelect={false}
            />
            {timerVariant.variant === "count_down" && (
                <>
                    {timerInputOptions.map((option) => {
                        const newVal: TimerInput = {
                            variant: "count_down",
                            time: option.value
                        }
                        return (
                            <button
                                onClick={() => {
                                    dropdownHandler(newVal)

                                }}
                            >
                                {option.label}
                            </button>
                        )
                    })}
                </>
            )}
        </>
    )
}