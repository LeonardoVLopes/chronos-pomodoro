// funcao generica para ordenar o array de tasks
// o metodo .sort() recebe uma funcao que compara dois itens (a, b) e deve retornar:
// - um numero negativo se 'a' deve vir antes de 'b'
// - um nuemro positivo se 'b' deve vir antes de 'a'
// - zero se nao precisa mudar a ordem

import type { TaskModel } from "../models/TaskModel";

// a funcao cuida de:
// 1. se o valor for null, joga pro final da lista
// 2. se for numero, ordena numericamente
// 3. se for string, ordena alfabeticamente

// o spread [...tasks] cria uma copia do array original para nao alterar ele direto

// define os parametros esperados pela funcao
export type SortTasksOptions = {
  tasks: TaskModel[]; // lista de tarefas que sera ordenada
  direction?: "asc" | "desc"; // ordem crescente ou decrescente
  field: keyof TaskModel; // qual campo da tarefa sera usado para ordernacao
};

export function sortTasks({
  field = "startDate", // se o campo nao for informado, usamos 'startDate' como padrao
  direction = "desc", // se a direcao nao for informada, usamos 'desc' como padrao
  tasks = [], // se nenhuma lista for passada, usamos uma lista vazia
}: SortTasksOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    // pegamos o valor da propriedade escolhida em cada tarefa
    const aValue = a[field];
    const bValue = b[field];

    // --- TRATANDO VALORES NULOS ---

    // se os dois forem nulos, mantemos a ordem atual
    if (aValue === null && bValue === null) return 0;

    // se apenas o primeiro for nulo, ele vai para o final
    if (aValue === null) return 1;

    // se apenas o segundo for nulo, ele vai para o final
    if (bValue === null) return -1;

    // --- COMPARACAO NUMERICA ---

    // se os dois valores forem numeros, fazemos uma subtracao para ordenar
    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc"
        ? aValue - bValue // Ex: 1, 2, 3...
        : bValue - aValue; // Ex: 3, 2, 1...
    }

    // --- COMPARACAO DE STRINGS ---

    // se os dois valores forem strings,usamos localeCompare para comparar em ordem alfabetica
    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction === "asc"
        ? aValue.localeCompare(bValue) // Ex: a -> z
        : bValue.localeCompare(aValue); // Ex: z -> a
    }

    // --- CASOS NAO TRATADOS ---

    // se nao for nem numero, nem string,, nem nulo, mantemos a ordem atual
    return 0;
  });
}
