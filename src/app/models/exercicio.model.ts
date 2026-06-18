import { GrupoMuscular } from "./grupo-muscular.model"

export interface Exercicio {
    id: string;
    nome: string;
    series: number;
    repetição: number;
    tempo: number;
    grupoMuscular: GrupoMuscular;

}