import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { LoginComponent } from './login/login.component';
import { CompromissoComponent } from './compromisso/compromisso.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ConsultaComponent,
    EdicaoComponent,
    LoginComponent,
    CompromissoComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
