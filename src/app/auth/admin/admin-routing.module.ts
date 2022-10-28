import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent
    // loadChildren:DashboardComponent
  },
  {
    path:"dashboard/:id",
    component:UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
