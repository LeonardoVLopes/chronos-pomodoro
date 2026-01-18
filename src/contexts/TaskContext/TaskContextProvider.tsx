import type React from "react";
import { useEffect, useReducer, useRef } from "react";

import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispath] = useReducer(TaskReducer, initialTaskState);
  let playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManager.getInstance();

  useEffect(() => {
    worker.onmessage((e) => {
      const countDownSeconds = e.data;

      if (countDownSeconds <= 0) {
        if (playBeepRef.current) {
          playBeepRef.current();
          playBeepRef.current = null;
        }
        dispath({ type: "COMPLETE_TASK" });
        worker.terminate();
      } else {
        dispath({
          type: "COUNT_DOWN",
          payload: { secondsRemaining: countDownSeconds },
        });
      }
    });
  }, [worker, dispath]);

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispath }}>
      {children}
    </TaskContext.Provider>
  );
}
