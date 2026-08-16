import type { Inputs, GameSettings, TimerSetting } from "../../types/settings"


export const createGameSettings = (inputs: Inputs) => {
    let timerSetting: TimerSetting

    if(inputs.timer.variant === "count_down") {
        timerSetting = inputs.timer.time === undefined ?
        { variant: inputs.timer.variant, time: 1 } :
        { variant: inputs.timer.variant, time: inputs.timer.time }
    } else {
        timerSetting = inputs.timer
    }

    const newSettings: GameSettings = {
        grid: inputs.grid,
        difficulty: inputs.difficulty,
        timer: timerSetting
    }

    return newSettings
}