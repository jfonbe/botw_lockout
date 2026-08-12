export type Task = {
    id: number,
    text: string,
    difficulty:
        | "easy"
        | "medium"
        | "hard"
    variables?: Variables
}

export type Count = {
    min: number,
    max: number
}

export type Variables = {
    count: Count
}