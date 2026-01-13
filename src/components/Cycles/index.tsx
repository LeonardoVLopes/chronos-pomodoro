import styles from "./styles.module.css";

import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cyclesDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
              aria-label={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
        {/* <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.longBreakTime}`}></span> */}
      </div>
    </div>
  );
}
