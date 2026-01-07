import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completeDate: number | null; // quando o timer chegar ao final'
  interruptDate: number | null; // quando a task for interrompido
  type: keyof TaskStateModel["config"]; // 'workTime' | 'shortBreakTime' | 'longBreakTime'
}
