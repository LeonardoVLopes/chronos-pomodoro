import type React from "react";
import { useEffect, useReducer } from "react";

import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispath] = useReducer(TaskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  useEffect(() => {
    worker.onmessage((e) => {
      const countDownSeconds = e.data;
      console.log(countDownSeconds);

      if (countDownSeconds <= 0) {
        dispath({ type: "COMPLETE_TASK" });
        worker.terminate();
      } else {
        dispath({
          type: "COUNT_DOWN",
          payload: { secondsRemaining: countDownSeconds },
        });
      }

      console.log(e.data);
    });
  }, [worker, dispath]);

  useEffect(() => {
    if (!state.activeTask) {
      console.log("worker terminado por falta de activeTask");
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispath }}>
      {children}
    </TaskContext.Provider>
  );
}
