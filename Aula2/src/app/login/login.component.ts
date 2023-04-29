import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: UsuarioService){}
  logar(dados:any){
    this.service.logar(dados).subscribe(token => {
      let tokenStr = JSON.stringify(token)
      let obj = JSON.parse(tokenStr)
      localStorage.setItem('token',obj.token)
    })    
  }
}
