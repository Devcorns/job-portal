import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnAnimationsComponent } from './learn-animations/learn-animations.component';



const routes: Routes = [
 {
   path: "basic-animation",
   component:LearnAnimationsComponent
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationRoutingModule { }
