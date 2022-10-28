// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnAnimationsComponent } from './learn-animations/learn-animations.component';
import { AnimationRoutingModule } from './animation-routing.module';



@NgModule({
  declarations: [
    LearnAnimationsComponent
  ],
  imports: [
    CommonModule,
    AnimationRoutingModule,
    // BrowserAnimationsModule
  ]
})
export class AnimationsModule { }
