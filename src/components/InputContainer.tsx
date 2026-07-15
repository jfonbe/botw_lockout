import Dropdown from "./Dropdown"
import Button from "./Button"
import type { SettingsOptions } from "../types/settings"

type InputContainerProps = {
    settingsOptions: SettingsOptions,
    generateBoardHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function InputContainer({settingsOptions, generateBoardHandler }: InputContainerProps) {
    return (
        <>
            <div>
                <Dropdown
                    settings={settingsOptions.grid}
                    variant="grid-settings"
                />
                <Dropdown
                    settings={settingsOptions.difficulty}
                    variant="difficulty-settings"
                />
                <Dropdown
                    settings={settingsOptions.timer}
                    variant="timer-settings"
                />
            </div>
            <Button
                generateBoardHandler={generateBoardHandler}
            ></Button>
        </>
    )
}