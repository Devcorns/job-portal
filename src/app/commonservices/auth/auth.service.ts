import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private route: Router) {
    console.log("auth service works")
  }


  isLoggedIn() {
    return ("itprakhar@gmail.com"==localStorage.getItem("angular-email") && "prakhar" == localStorage.getItem("angular-pass"))? true: false;
  }


  isLogin(vals:any) {
    // this.isLoggedIn = (vals.email==localStorage.getItem("angular-email") && vals.pass == localStorage.getItem("angular-pass"))? true: false;
    this.route.navigate(['auth/admin/dashboard'])
    return (vals.email==localStorage.getItem("angular-email") && vals.pass == localStorage.getItem("angular-pass"))? true: false;
  }
  register(vals:any) {
    console.log("values form register service",vals)
    localStorage.setItem("angular-email",vals.email)
    localStorage.setItem("angular-pass",vals.pass)
    this.route.navigate(['login'])
  }
  logout() {
    localStorage.removeItem("angular-email")
    localStorage.removeItem("angular-pass")
  }
}
