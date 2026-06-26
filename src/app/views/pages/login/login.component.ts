import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  mensagemErro: string = '';
  carregando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
   }
  

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.carregando = true;
    this.mensagemErro = '';

    const { email, senha } = this.loginForm.value;

    this.authService.login(email, senha).subscribe({
      next: (resposta) => {
        localStorage.setItem('token', resposta.token);
        localStorage.setItem('usuario', JSON.stringify(resposta.usuario));
        this.router.navigate(['/tela-inicial']);
      },
      error: (erro) => {
        this.carregando = false;
        this.mensagemErro = 'Email ou senha inválidos';
      }
    });
  }

}
