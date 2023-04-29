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
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LogoutComponent } from './logout/logout.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ConsultaComponent,
    EdicaoComponent,
    LoginComponent,
    CompromissoComponent,
    ErrorsComponent,
    UsuariosComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
