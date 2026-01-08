import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";

import styles from "./styles.module.css";
import type { HomeProps } from "../../pages/Home";

export function MainForm({ state }: HomeProps) {
  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>
        <DefaultInput
          id="input"
          type="text"
          labelText="task"
          placeholder="Digite aqui"
        />
      </div>

      <div className={styles.formRow}>
        <p>Próximo intervalo é de {state.config.workTime} min.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
