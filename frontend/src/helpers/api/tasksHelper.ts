import type { Task } from "../../../../shared/types/tasks"


export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch("http://localhost:1234/")

  return response.json()
}