import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/commonservices/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logopath:string = "assets/img/logo.svg"
  constructor(private fb: FormBuilder,private route: Router, private loginService: AuthService ) {
    console.log("login component works")
    if(!this.loginService.isLoggedIn()) {
      this.route.navigate(['login'])
    } else {
      this.route.navigate(['auth/admin/dashboard'])
    }
  }
  loginForm = this.fb.group({
    email: ['',(Validators.required)],
    pass: ['',(Validators.required)]
  })

  loginSubmit() {
    this.loginService.isLogin(this.loginForm.value)
  }

  ngOnInit(): void {
  }

}
