import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  login(uname:string, pass:string, email:string){
    if(uname==='ivona'&& pass==='123456' && email==='emma_1914@abv.bg'){
      return 200;
    }else{
      return 403;
    }
  }
  logout(){
    this.router.navigate(['login']);
  }
}
