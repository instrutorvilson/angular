import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt from "jwt-decode"

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(!this.usuarioLogado(route.url))
       this.router.navigate(['/login'])

    return true;
  }

  usuarioLogado(url:any){
   /* let user = localStorage.getItem('login')
    console.log(`Usuario logado ${user}`)
    return user != null;*/
    let token =  localStorage.getItem('token') || ""
    let decoded:any = jwt(token)
      
    if(url == 'cadastro'){
      if(decoded.perfil !== 'ADM'){
        this.router.navigate(['/erros','Precisa ser adm'])
        return false
      }                
    }
    
    return true;
    
  }
}
