// useReducer <- hook do react que recebe um reducer e um estado inicial
// reducer < funcao que recebe o estado atual e uma acao, e retorna o novo estado
// state <- o estado atual
// action <- a acao disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da acao, geralmente uma string (pode ser enum, contante, etc)
// payload <- os dados extras enviados junto com a action, se necessario para atualizar o estado

import type { TaskModel } from "../../models/TaskModel";

export type TaskActionTypes = {
  START_TASK: "START_TASK",
  INTERRUPT_TASK: "INTERRUPT_TASK",
  RESET_STATE: "RESET_STATE",
}

export type TaskActionModel =
  | {
      type: 'START_TASK';
      payload: TaskModel;
    }
  | {
      type: 'INTERRUPT_TASK';
      payload: TaskModel;
    }
  | {
      type: 'RESET_STATE';
    };
