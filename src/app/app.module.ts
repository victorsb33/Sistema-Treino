import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomLayoutComponent } from './views/custom-layout/custom-layout.component';
import { LoginComponent } from './views/pages/login/login.component';
import { CadastroComponent } from './views/pages/cadastro/cadastro.component';
import { PersonalizacaoTreinoComponent } from './views/pages/personalizacao-treino/personalizacao-treino.component';
import { ModalTreinoComponent } from './views/pages/modal-treino/modal-treino.component';
import { TelaInicialComponent } from './views/pages/tela-inicial/tela-inicial.component';
import { GradeTreinoComponent } from './views/pages/tela-inicial/grade-treino/grade-treino.component';
import { ExercicioDiarioComponent } from './views/pages/tela-inicial/exercicio-diario/exercicio-diario.component';
import { InformacoesUsuarioComponent } from './views/pages/tela-inicial/informacoes-usuario/informacoes-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomLayoutComponent,
    LoginComponent,
    CadastroComponent,
    PersonalizacaoTreinoComponent,
    ModalTreinoComponent,
    TelaInicialComponent,
    GradeTreinoComponent,
    ExercicioDiarioComponent,
    InformacoesUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
