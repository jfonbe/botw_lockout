import type { Inputs } from "../../types/settings"


export const getNewInputs = <K extends keyof Inputs>(
    key: K,
    value: Inputs[K]
  ) => {
    return ((prev: Inputs) => ({
      ...prev,
      [key]: value
    }))
  }