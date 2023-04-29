import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient) { }

  inserir(contato: string){
   //this.contatos.push(contato)
   //return "Contato inserido com sucesso"   
   //let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoibWFyaWEiLCJlbWFpbCI6Im1hcmlhQGdtYWlsLmNvbSIsInBlcmZpbCI6IkFETSIsImlhdCI6MTY4Mjc4NzE0Mn0.xUaCGBlfhb7QqAIQ253rlRFAu6jT3A6YsafMrA3rNRY" 
   let token = localStorage.getItem('token') || ""
   let url = 'https://aula-node-vfhi.onrender.com/contatos'
   return this.http.post(url, contato, 
    {
      headers:{'x-access-token':token}
     }
   )    
  }

  logar(usuario:any){
    let url = 'https://aula-node-vfhi.onrender.com/usuarios/login'
    return this.http.post(url, usuario)
  }
  consultar(){
    let url = 'https://aula-node-vfhi.onrender.com/contatos'
    return this.http.get(url)
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
