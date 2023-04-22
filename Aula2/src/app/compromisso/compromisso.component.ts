import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-compromisso',
  templateUrl: './compromisso.component.html',
  styleUrls: ['./compromisso.component.css']
})
export class CompromissoComponent {
  contatos: any = []
  constructor(private service:ContatoService){
    this.contatos = this.service.consultar();
  }

  compromissoForm = new FormGroup(
    {
      local: new FormControl(''),
      data: new FormControl(''),
      hora: new FormControl(''),
      contato: new FormControl('')
    }   
  )
  enviar(){
    console.log(this.compromissoForm.value)
  }
}
