import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetivoTreino } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-personalizacao-treino',
  templateUrl: './personalizacao-treino.component.html',
  styleUrls: ['./personalizacao-treino.component.scss']
})
export class PersonalizacaoTreinoComponent {

  objetivoSelecionado: ObjetivoTreino | null = null;
  mensagemErro: string = "";

  constructor(private router: Router) { }

  selecionarObjetivo(objetivo: ObjetivoTreino): void {
    this.objetivoSelecionado = objetivo;
    this.mensagemErro = '';
  }

  avancar(): void {
    if (!this.objetivoSelecionado) {
      this.mensagemErro = 'Selecione um objetivo para continuar';
      return;
    }

    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      usuario.objetivo = this.objetivoSelecionado;
      localStorage.setItem('usuario', JSON.stringify(usuario));
    }

    this.router.navigate(['/modal-treino']);
  }
  
}
