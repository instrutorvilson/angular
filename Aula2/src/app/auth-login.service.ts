import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt from "jwt-decode"

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.usuarioLogado())
       this.router.navigate(['/login'])

    return true;
  }

  usuarioLogado(){
   /* let user = localStorage.getItem('login')
    console.log(`Usuario logado ${user}`)
    return user != null;*/
    let token =  localStorage.getItem('token') || ""
    let decoded:any = jwt(token)
   
    if(decoded.perfil !== 'ADM')
       this.router.navigate(['/erros'])

    return true;
  }
}
