import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { AuthLoginService } from './auth-login.service';
import { LoginComponent } from './login/login.component';
import { CompromissoComponent } from './compromisso/compromisso.component';
import { ErrorsComponent } from './errors/errors.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { 
    path:'cadastro', 
    component:CadastroComponent,
    canActivate:[AuthLoginService]
  },
  { 
    path:'cadastro/compromisso', 
    component:CompromissoComponent,
    canActivate:[AuthLoginService]
  },
  { path:'usuario', component: UsuariosComponent},
  { path:'login', component: LoginComponent}, 
  { path:'logout', component: LogoutComponent}, 
  { path:'consulta', component:ConsultaComponent},
  { path:'edicao/:pemail', component:EdicaoComponent},
  { path:'erros/:msg', component:ErrorsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
