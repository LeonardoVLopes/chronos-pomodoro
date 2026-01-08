import type { TaskModel } from "./TaskModel"

// Estado -> Componente -> Filhos que usam

export type TaskStateModel = {
  tasks: TaskModel[]; // historico, mainform
  secondsRemaining: number; // home, countDown, historico, mainform, button
  formattedSecondsRemaining: string; // titulo, countDown
  activeTask: TaskModel | null; // countDown, historico, mainform, button
  currentCycle: number; // home
  config: {
    workTime: number; // mainform
    shortBreakTime: number; // mainform
    longBreakTime: number; // mainform
  }
}
