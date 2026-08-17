import type { Task } from "../../../../shared/types/tasks"
import type { DifficultySetting, GridSetting } from "../../types/settings"

export const getBoardTasksArray = (tasks: Task[], difficulty: DifficultySetting, grid: GridSetting) => {
    const distribution =  getTaskDistribution(difficulty, grid)

    let boardTaskArray: Task[][] = Array.from({ length: grid.cols }, () => [])

    const newArr = shuffle([
        ...pickTasks(tasks, "easy", distribution.easy),
        ...pickTasks(tasks, "medium", distribution.medium),
        ...pickTasks(tasks, "hard", distribution.hard),
    ])

    newArr.forEach((element, index) => {
        const row = Math.floor(index / grid.rows)
        const col = index % 3

        boardTaskArray[row][col] = setCount(element)
    })

    return boardTaskArray
}

const setCount = (task: Task) => {
    console.log(task)
    let count: number = 0


    if(task.variables?.count) {
        count = randomNumber(task.variables.count.min, task.variables.count.max)

        const newTask = {
            ...task,
            text: replaceCountText(count, task.text)
        }

        return newTask

    } else {
        return task
    }
}

const replaceCountText = (count: number, text: string) => {
    const substring = "{count}"
    const startIndex = text.indexOf("{count}")
    const endIndex = startIndex + substring.length

    return text.slice(0, startIndex) + count + text.slice(endIndex)
}

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getTaskDistribution = (difficulty: DifficultySetting, grid: GridSetting) => {
    const total = grid.cols * grid.rows

    const percentages = {
        easy: {
            easy: 0.6,
            medium: 0.3,
            hard: 0.1
        },
        medium: {
            easy: 0.33,
            medium: 0.33,
            hard: 0.33
        },
        hard: {
            easy: 0.1,
            medium: 0.3,
            hard: 0.6
        }
    }

    const distribution = percentages[difficulty]

    let dist = {
        easy: Math.floor(distribution.easy * (total)),
        medium: Math.floor(distribution.medium * (total)),
        hard: Math.floor(distribution.hard * (total))
    }

    let remaining = total - dist.easy - dist.medium - dist.hard

    const difficulties = ["easy", "medium", "hard"] as const

    for (let i = 0; i < remaining; i++) {
        dist[difficulties[i % 3]]++
    }

    return dist
}

const pickTasks = (tasks: Task[], difficulty: DifficultySetting, amount: number) => {
    return shuffle(
        tasks.filter((option: any) => option.difficulty === difficulty).slice(0, amount)
    )
}

const shuffle = (array: Task[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled
}