import { Exercicio } from "./exercicio.model";

export interface Treino {
    id: string;
    usuarioId: string;
    nome: string;
    exercicios: Exercicio[];
}