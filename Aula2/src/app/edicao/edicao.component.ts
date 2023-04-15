import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {
  msg:string = ""
  chave?: any = ""
  contato:any = {}
  constructor(
    private route: ActivatedRoute, 
    private service:ContatoService){}
  
   ngOnInit(): void {
     this.chave = this.route.snapshot.paramMap.get("pemail") 
     this.contato = this.service.consultarPeloEmail(this.chave)     
  }

  alterar(){
    this.msg = "Contato alterado com sucesso"
  }
}
