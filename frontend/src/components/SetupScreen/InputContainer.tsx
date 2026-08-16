import Dropdown from "./Dropdown"
import BoardGeneratorButton from "./BoardGeneratorButton"
import TimerDropdown from "./TimerDropdown"

import type { InputOptions, DropdownHandlerProps } from "../../types/components"
import type { Inputs } from "../../types/settings"

import styles from "../../css/InputContainer.module.css"


type InputContainerProps = {
    inputOptions: InputOptions,
    dropdownHandlers: DropdownHandlerProps,
    startGameHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    currentInputs: Inputs
}

export default function InputContainer({ inputOptions, dropdownHandlers, startGameHandler, currentInputs }: InputContainerProps) {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.dropdownContainer}>
                <Dropdown
                    inputOptions={inputOptions.grid}
                    dropdownHandler={dropdownHandlers.gridInputHandler}
                    currentInput={currentInputs.grid}
                    getValueKey={(option) => `${option.rows}-${option.cols}`}
                    variant="grid"
                />
                <Dropdown
                    inputOptions={inputOptions.difficulty}
                    dropdownHandler={dropdownHandlers.difficultyInputHandler}
                    currentInput={currentInputs.difficulty}
                    getValueKey={(option) => option}
                    variant="difficulty"
                />
                <TimerDropdown
                    inputOptions={inputOptions.timer}
                    dropdownHandler={dropdownHandlers.timerInputHandler}
                    currentInput={currentInputs.timer}
                    getValueKey={(option) => option.variant}
                />
            </div>
            <BoardGeneratorButton
                startGameHandler={startGameHandler}
            />
        </div>
    )
}