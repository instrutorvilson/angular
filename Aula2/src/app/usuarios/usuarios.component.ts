import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  constructor(private service:UsuarioService){}

  perfis = ['ADM','GERENTE','OPERADOR']

  enviar(dados:any){
     this.service.inserir(dados).subscribe(response => console.log(response))
  }
}
