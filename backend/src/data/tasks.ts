import type { Task } from "../../../shared/types/tasks.js"

import itemTasks from "./itemTasks.js"
import killTasks from "./killTasks.js"
import questTasks from "./questTasks.js"

const tasks: Task[] = [
    ...itemTasks,
    ...killTasks,
    ...questTasks
]

export default tasks