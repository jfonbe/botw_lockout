import InputContainer from "./InputContainer"

import { inputOptions } from "../../data/inputOptions"

import type { SettingsProps } from "../../types/components"

import styles from "../../css/Settings.module.css"


export default function Settings({ startGameHandler, dropdownHandlers, inputs }: SettingsProps) {
    return (
        <div className={styles.settings}>
            <h1 className={styles.heading}>Breath of the Wild - Lockout</h1>
            <InputContainer
                inputOptions={inputOptions}
                dropdownHandlers={dropdownHandlers}
                startGameHandler={startGameHandler}
                currentInputs={inputs}
            />
        </div>
    )
}