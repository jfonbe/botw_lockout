import Dropdown from "./Dropdown"
import Button from "./Button"
import type { SettingsOptions, DropdownHandlerProps } from "../types/components"

type InputContainerProps = {
    settingsOptions: SettingsOptions,
    dropdownHandlers: DropdownHandlerProps,
    generateBoardHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function InputContainer({settingsOptions, dropdownHandlers, generateBoardHandler }: InputContainerProps) {
    return (
        <>
            <div>
                <Dropdown
                    settings={settingsOptions.grid}
                    dropdownHandler={dropdownHandlers.gridSettingsHandler}
                    getKey={(option) => `${option.rows}-${option.cols}`}
                />
                <Dropdown
                    settings={settingsOptions.difficulty}
                    dropdownHandler={dropdownHandlers.difficultySettingsHandler}
                    getKey={(option) => option}
                />
                <Dropdown
                    settings={settingsOptions.timer}
                    dropdownHandler={dropdownHandlers.timerSettingsHandler}
                    getKey={(option) => option}
                />
            </div>
            <Button
                generateBoardHandler={generateBoardHandler}
            ></Button>
        </>
    )
}