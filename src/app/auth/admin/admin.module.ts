import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
// import { HeaderComponent } from 'src/app/includes/header/header.component';
// import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    UserDetailsComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    // HttpClient

  ]
})
export class AdminModule { }
