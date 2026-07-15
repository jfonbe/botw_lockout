import InputContainer from "./InputContainer"
import { settingsOptions } from "../data/settingsOptions"

type SettingsProps = {
    generateBoardHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Settings({ generateBoardHandler }: SettingsProps) {
    return (
        <>
            <h1>Breath of the Wild - Lockout</h1>
            <InputContainer
                settingsOptions={settingsOptions}
                generateBoardHandler={generateBoardHandler}
            />
        </>
    )
}