import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import styles from "./styles.module.css";
import type { ToastContentProps } from "react-toastify/unstyled";

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label="Confirmar acao e fechar"
            title="Confirmar acao e fechar"
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<ThumbsDownIcon />}
            aria-label="Cancelar acao e fechar"
            title="Cancelar acao e fechar"
            color="red"
          />
        </div>
      </div>
    </>
  );
}
