export interface Usuario {
    id: string;
    nome?: string;
    email: string;
    senha: string;
    altura?: number;
    peso?: number;
    imc?: number;
    objetivo?: ObjetivoTreino;
    diasDeTreino?: number;
    tempoDisponivel?: number;
    qrCode?: string;
}

export type ObjetivoTreino =
  | 'ganho_massa'
  | 'ganho_forca'
  | 'resistencia'
  | 'perda_peso';