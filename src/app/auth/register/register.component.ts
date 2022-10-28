import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/commonservices/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private regForm: AuthService) { }

  ngOnInit(): void {
  }

  registerForm = this.fb.group({
    email: ['',Validators.required],
    pass: ['',Validators.required]
  })

  registerSubmit() {

    this.regForm.register(this.registerForm.value)
  }

}
