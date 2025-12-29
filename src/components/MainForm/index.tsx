import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";

import styles from "./styles.module.css";

export function MainForm() {
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
        <p>Lorem ipsum dolor sit amet.</p>
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
