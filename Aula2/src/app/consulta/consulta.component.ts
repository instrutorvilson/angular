import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit{

  contatos: any = []

  constructor(private service:ContatoService){}

  ngOnInit(): void {
    this.consultar()
  }  
  
  consultar(){
    this.service.consultar().subscribe( cts => this.contatos = cts)
  }

  excluir(email:string){
    this.service.excluir(email)
  }
  
}
