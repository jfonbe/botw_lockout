import InputContainer from "./InputContainer"
import { settingsOptions } from "../data/settingsOptions"
import type { SettingsProps } from "../types/components"
import styles from "../css/Settings.module.css"

export default function Settings({ generateBoardHandler, dropdownHandlers, gameSettings }: SettingsProps) {
    return (
        <div className={styles.settings}>
            <h1 className={styles.heading}>Breath of the Wild - Lockout</h1>
            <InputContainer
                settingsOptions={settingsOptions}
                dropdownHandlers={dropdownHandlers}
                generateBoardHandler={generateBoardHandler}
                currentSettings={gameSettings}
            />
        </div>
    )
}