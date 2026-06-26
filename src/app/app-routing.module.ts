import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';
import { TelaInicialComponent } from './views/pages/tela-inicial/tela-inicial.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
