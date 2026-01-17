import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";

type TaskContextProps = {
  state: TaskStateModel;
  dispath: React.Dispatch<TaskActionModel>;
};

const InitialContextValue = {
  state: initialTaskState,
  dispath: () => {},
};

export const TaskContext = createContext<TaskContextProps>(InitialContextValue);
