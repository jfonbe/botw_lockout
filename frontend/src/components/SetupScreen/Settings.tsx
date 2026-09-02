import Dropdown from "./Dropdown"
import TimerOptions from "./TimerOptions"
import BoardGeneratorButton from "./BoardGeneratorButton"

import { inputOptions } from "../../data/inputOptions"

import type { OnInputChange } from "../../types/components"
import type { Inputs } from "../../types/settings"

import styles from "../../css/Settings.module.css"


type SettingsProps = {
    onStartGame: () => void
    onInputChange: OnInputChange
    inputs: Inputs
}

export default function Settings({ inputs, onInputChange, onStartGame}: SettingsProps) {
    const currentGridOption = inputOptions.grid.options.find(
        option => (option.value.rows === inputs.grid.rows && option.value.cols === inputs.grid.cols)
    )

    const currentDifficultyOption = inputOptions.difficulty.options.find(
        option => option.value === inputs.difficulty
    )

    const currentTimerOption = inputOptions.timer.options.find(
        option => option.value.variant === inputs.timer.variant
    )

    const gridLabel = currentGridOption?.label ?? "Grid"
    const difficultyLabel = currentDifficultyOption?.label ?? "Difficulty"
    const timerLabel = currentTimerOption && inputs.timer.variant === "count_down" && inputs.timer.time
        ? `${currentTimerOption.label} (${inputs.timer.time}H)`
        : currentTimerOption?.label ?? "Timer"


    return (
        <div className={styles.settings}>
            <h1 className={styles.heading}>Breath of the Wild - Lockout</h1>
            <div className={styles.inputContainer}>
                <div className={styles.dropdownContainer}>
                    <Dropdown
                        inputOptions={inputOptions.grid}
                        label={gridLabel}
                        onChange={(value) => onInputChange("grid", value)}
                        variant="grid"
                        closeOnSelect={true}
                    />
                    <Dropdown
                        inputOptions={inputOptions.difficulty}
                        label={difficultyLabel}
                        onChange={(value) => onInputChange("difficulty", value)}
                        variant="difficulty"
                        closeOnSelect={true}
                    />
                    <Dropdown
                        inputOptions={inputOptions.timer}
                        label={timerLabel}
                        onChange={(value) => onInputChange("timer", value)}
                        variant="timer"
                        closeOnSelect={false}
                    >
                        {(closeDropdown) =>
                            inputs.timer.variant === "count_down" && (
                                <TimerOptions
                                    onChange={(value) => {onInputChange("timer", value)}}
                                    closeDropdown={closeDropdown}
                                />
                            )
                        }
                    </Dropdown>
                </div>
                <BoardGeneratorButton
                    onStartGame={onStartGame}
                />
            </div>
        </div>
    )
}