import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { JobFieldComponent } from './job-field-component/job-field-component';
import LearnTest from './learn-test-cases/learn-test';
import { ChildAComponent } from './parent/child-a/child-a.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"job-field",
    component: JobFieldComponent
  },
  {
    path:"job-field/:field-id",
    component: JobFieldComponent
  },
  {
    path:"auth",
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule),
    canActivate: [AuthGuard]
  },
  {
    path:"parent",
    component: ParentComponent,
    // children: [{
    //   path:"childa",
    //   component: ChildAComponent
    // }]

  },
  {
    path:"animations",
    loadChildren: () => import('./animations/animations.module').then(module => module.AnimationsModule),
  },
  {
    path:"learn-test",
    component:LearnTest
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
