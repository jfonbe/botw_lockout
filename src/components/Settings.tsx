import InputContainer from "./InputContainer"
import { settingsOptions } from "../data/settingsOptions"
import type { SettingsProps } from "../types/settings"



export default function Settings({ generateBoardHandler, dropdownHandlers }: SettingsProps) {
    return (
        <>
            <h1>Breath of the Wild - Lockout</h1>
            <InputContainer
                settingsOptions={settingsOptions}
                dropdownHandlers={dropdownHandlers}
                generateBoardHandler={generateBoardHandler}
            />
        </>
    )
}