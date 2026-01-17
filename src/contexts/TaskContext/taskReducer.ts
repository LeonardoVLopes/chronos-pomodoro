import type { TaskStateModel } from "../../models/TaskStateModel";
import {type TaskActionModel } from "./taskActions";

export function TaskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch(action.type) {
    case 'START_TASK': {
      return state;
    }
    case 'INTERRUPT_TASK': {
      return state;
    }
    case 'RESET_STATE': {
      return state;
    }
  }
  // reducer deve receber o estado e a acao, e sempre deve retornar o estado
  return state;
}
