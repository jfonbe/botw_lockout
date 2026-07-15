export type DropdownSettings = {
    title: string
    options: string[]
}

export type SettingsOptions = {
    grid: DropdownSettings
    difficulty: DropdownSettings
    timer: DropdownSettings
}

export type VariantSettings = "grid-settings" | "difficulty-settings" | "timer-settings"