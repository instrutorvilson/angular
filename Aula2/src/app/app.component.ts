import { Component, OnInit } from '@angular/core';
import jwt from "jwt-decode"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aula2';
  perfil=''

  ngOnInit(): void {
    let token = localStorage.getItem('token') || ""
    let decoded:any = jwt(token)
    this.perfil = decoded.perfil
  }

  logout(){
    localStorage.removeItem('token')
  }
}
