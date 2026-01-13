import type React from "react";
import { useReducer, useState } from "react";

import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  const [numero, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
    }
    return state;
  }, 0);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O numero é: {numero}</h1>
      <button onClick={() => dispatch("increment")}>Incrementar</button>
      <button onClick={() => dispatch("decrement")}>Decrementar</button>
      {children}
    </TaskContext.Provider>
  );
}
