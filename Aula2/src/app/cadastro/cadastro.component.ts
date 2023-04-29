import { Component } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  msg: string = ""
  constructor(private service:ContatoService){}

  enviar(value:string){
    this.service.inserir(value).subscribe(ct => {
      if(ct != null)
        this.msg = "Contato inserido com sucesso."
    })
  }

}
