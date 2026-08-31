import Dropdown from "./Dropdown"
import TimerDropdown from "./TimerDropdown"
import BoardGeneratorButton from "./BoardGeneratorButton"

import { inputOptions } from "../../data/inputOptions"

import type { OnInputChange } from "../../types/components"
import type { Inputs } from "../../types/settings"

import styles from "../../css/Settings.module.css"


type SettingsProps = {
    onStartGame: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onInputChange: OnInputChange,
    inputs: Inputs
}

export default function Settings({ inputs, onInputChange, onStartGame}: SettingsProps) {
    return (
        <div className={styles.settings}>
            <h1 className={styles.heading}>Breath of the Wild - Lockout</h1>
            <div className={styles.inputContainer}>
                <div className={styles.dropdownContainer}>
                    <Dropdown
                        inputOptions={inputOptions.grid}
                        currentInput={inputs.grid}
                        onChange={(value) => onInputChange("grid", value)}
                        getValueKey={(option) => `${option.rows}-${option.cols}`}
                        variant="grid"
                    />
                    <Dropdown
                        inputOptions={inputOptions.difficulty}
                        currentInput={inputs.difficulty}
                        onChange={(value) => onInputChange("difficulty", value)}
                        getValueKey={(option) => option}
                        variant="difficulty"
                    />
                    <TimerDropdown
                        inputOptions={inputOptions.timer}
                        currentInput={inputs.timer}
                        onChange={(value) => onInputChange("timer", value)}
                        getValueKey={(option) => option.variant}
                    />
                </div>
                <BoardGeneratorButton
                    onStartGame={onStartGame}
                />
            </div>
        </div>
    )
}