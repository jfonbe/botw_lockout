import Dropdown from "./Dropdown"
import Button from "./Button"
import TimerDropdown from "./TimerDropdown"

import type { SettingsOptions, DropdownHandlerProps } from "../types/components"
import type { GameSettings } from "../types/settings"

import styles from "../css/InputContainer.module.css"

type InputContainerProps = {
    settingsOptions: SettingsOptions,
    dropdownHandlers: DropdownHandlerProps,
    generateBoardHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    currentSettings: GameSettings
}

export default function InputContainer({settingsOptions, dropdownHandlers, generateBoardHandler, currentSettings }: InputContainerProps) {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.dropdownContainer}>
                <Dropdown
                    settings={settingsOptions.grid}
                    dropdownHandler={dropdownHandlers.gridSettingsHandler}
                    currentSetting={currentSettings.grid}
                    getValueKey={(option) => `${option.rows}-${option.cols}`}
                    variant="grid"
                />
                <Dropdown
                    settings={settingsOptions.difficulty}
                    dropdownHandler={dropdownHandlers.difficultySettingsHandler}
                    currentSetting={currentSettings.difficulty}
                    getValueKey={(option) => option}
                    variant="difficulty"
                />
                <TimerDropdown
                    settings={settingsOptions.timer}
                    dropdownHandler={dropdownHandlers.timerSettingsHandler}
                    currentSetting={currentSettings.timer}
                    getValueKey={(option) => option.variant}
                />
            </div>
            <Button
                generateBoardHandler={generateBoardHandler}
            ></Button>
        </div>
    )
}