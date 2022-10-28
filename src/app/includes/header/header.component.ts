import { Component, OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/commonservices/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
 isVisible:boolean = true;
  constructor(private authService:AuthService,private route: Router) {
    console.log("constructoe",this.authService.isLoggedIn())
   }

  ngOnInit(): void {

    console.log("ngOnInit")
  }

  ngOnChanges() {
    // this.isVisible = this.authService.isLoggedIn()
    // this.route.navigateByUrl('auth/admin/dashboard');
    console.log("ngOnChanges")
  }
  logout() {
    this.authService.logout()
    this.route.navigateByUrl('login');
    this.isVisible = false;
  }

  ngDoCheck() {
    console.log("ngDoCheck")
    this.isVisible = this.authService.isLoggedIn()
  }


}
