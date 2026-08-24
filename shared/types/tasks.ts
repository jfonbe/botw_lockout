export type Task = {
    id: string,
    text: string,
    difficulty:
        | "easy"
        | "medium"
        | "hard",
    type: TaskTypes,
    variables?: Variables
}

export type TaskTypes = "collect" | "kill" | "quest"

export type Count = {
    min: number,
    max: number
}

export type Variables = {
    count: Count
}