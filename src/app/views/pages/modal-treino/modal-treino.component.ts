import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-modal-treino',
  templateUrl: './modal-treino.component.html',
  styleUrls: ['./modal-treino.component.scss']
})
export class ModalTreinoComponent {

  modalForm: FormGroup;
  mensagemErro: string = '';
  carregando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.modalForm = this.fb.group({
      nome: ['', Validators.required],
      altura: ['', Validators.required],
      peso: ['', Validators.required],
      diasDeTreino: ['', Validators.required],
      tempoDisponivel: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if (this.modalForm.invalid) {
      return;
    }

    this.carregando = true;
    this.mensagemErro = '';

    const usuarioSalvo = localStorage.getItem('usuario');
    const usuarioAtual: Usuario = JSON.parse(usuarioSalvo!);

    const usuarioAtualizado: Usuario = {
      ...usuarioAtual,
      nome: this.modalForm.value.nome,
      altura: Number(this.modalForm.value.altura),
      peso: Number(this.modalForm.value.peso),
      diasDeTreino: Number(this.modalForm.value.diasDeTreino),
      tempoDisponivel: Number(this.modalForm.value.tempoDisponivel),
      imc: Number((this.modalForm.value.peso / ((this.modalForm.value.altura / 100) ** 2)).toFixed(1))
    };

    this.usuarioService.atualizarPerfil(usuarioAtualizado).subscribe({
      next: (usuarioRetornado) => {
        localStorage.setItem('usuario', JSON.stringify(usuarioRetornado));
        this.router.navigate(['/tela-inicial']);
      },
      error: (erro) => {
        this.carregando = false;
        this.mensagemErro = 'Erro ao salvar perfil. Tente novamente.';
      }
    });
  }
}
