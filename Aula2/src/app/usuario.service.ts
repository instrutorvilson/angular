import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  logar(usuario: any) {
    let url = 'https://aula-node-vfhi.onrender.com/usuarios/login'
    return this.http.post(url, usuario)
  }

  inserir(contato: any) {
    let url = 'https://aula-node-vfhi.onrender.com/usuarios'
    if (contato.perfil == 'ADM') {
      let token = localStorage.getItem('token') || ""
      return this.http.post(url, contato,
        {
          headers: { 'x-access-token': token }
        })
    }
    return this.http.post(url, contato)
  }
}
