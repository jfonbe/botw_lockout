import type { Inputs } from "../types/settings"

export const updateInputs = <K extends keyof Inputs>(
    key: K,
    value: Inputs[K]
  ) => {
    return ((prev: Inputs) => ({
      ...prev,
      [key]: value
    }))
  }