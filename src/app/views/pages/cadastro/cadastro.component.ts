import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  cadastroForm: FormGroup;
  mensagemErro: string = '';
  carregando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.invalid) {
      return;
    }

    this.carregando = true;
    this.mensagemErro = '';

    const { email, senha } = this.cadastroForm.value;

    this.authService.cadastrar(email, senha).subscribe({
      next: (usuarioCriado) => {
        this.router.navigate(['/login']);
      },
      error: (erro) => {
        this.carregando = false;
        this.mensagemErro = 'Erro ao criar conta. Tente outro email.';
      }
    });
  }

}
