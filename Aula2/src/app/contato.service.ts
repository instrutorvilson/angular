import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: any = [
    {
      nome:"maria",
      email:"maria@gmail.com",
      celular:"(47)0987-0987"
    },
    {
      nome:"jose",
      email:"jose@gmail.com",
      celular:"(47)0987-0987"
    }
  ];
  constructor() { }

  inserir(contato: string){
    this.contatos.push(contato)
    return "Contato inserido com sucesso"
  }

  consultar(){
    return this.contatos
  }
  
  consultarPeloEmail(email:string){
    for(let i=0; i < this.contatos.length; i++){
      if (this.contatos[i].email === email)
         return this.contatos[i]
    }  
  }

  excluir(email:string){
    for(let i=0; i < this.contatos.length; i++){
      if (this.contatos[i].email === email)
         this.contatos.splice(i,1)
         return
    } 
  }
}
