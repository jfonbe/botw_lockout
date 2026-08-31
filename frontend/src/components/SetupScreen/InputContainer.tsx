import Dropdown from "./Dropdown"
import BoardGeneratorButton from "./BoardGeneratorButton"
import TimerDropdown from "./TimerDropdown"

import type { InputOptions, OnInputChange } from "../../types/components"
import type { Inputs } from "../../types/settings"

import styles from "../../css/InputContainer.module.css"


type InputContainerProps = {
    inputOptions: InputOptions,
    currentInputs: Inputs,
    onInputChange: OnInputChange,
    onStartGame: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function InputContainer({ inputOptions, currentInputs, onInputChange, onStartGame }: InputContainerProps) {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.dropdownContainer}>
                <Dropdown
                    inputOptions={inputOptions.grid}
                    currentInput={currentInputs.grid}
                    onChange={(value) => onInputChange("grid", value)}
                    getValueKey={(option) => `${option.rows}-${option.cols}`}
                    variant="grid"
                />
                <Dropdown
                    inputOptions={inputOptions.difficulty}
                    currentInput={currentInputs.difficulty}
                    onChange={(value) => onInputChange("difficulty", value)}
                    getValueKey={(option) => option}
                    variant="difficulty"
                />
                <TimerDropdown
                    inputOptions={inputOptions.timer}
                    currentInput={currentInputs.timer}
                    onChange={(value) => onInputChange("timer", value)}
                    getValueKey={(option) => option.variant}
                />
            </div>
            <BoardGeneratorButton
                onStartGame={onStartGame}
            />
        </div>
    )
}