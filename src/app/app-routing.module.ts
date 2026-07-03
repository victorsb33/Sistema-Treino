import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';
import { TelaInicialComponent } from './views/pages/tela-inicial/tela-inicial.component';
import { CadastroComponent } from './views/pages/cadastro/cadastro.component';
import { PersonalizacaoTreinoComponent } from './views/pages/personalizacao-treino/personalizacao-treino.component';
import { ModalTreinoComponent } from './views/pages/modal-treino/modal-treino.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'personalizacao-treino', component: PersonalizacaoTreinoComponent },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'modal-treino', component: ModalTreinoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
