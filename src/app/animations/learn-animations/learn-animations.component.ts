import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-animations',
  templateUrl: './learn-animations.component.html',
  styleUrls: ['./learn-animations.component.scss'],
  animations: [
    trigger("fade",[
      // state(),
      // transition(":enter",[
      //   style({opacity:0}),
      //   animate(2000)
      // ]),
      transition(":leave, :enter",[
        style({opacity:1}),
        animate(2000,style({opacity: 0,backgroundColor: "red"}))
      ])
    ])
  ]
})
export class LearnAnimationsComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }
  removeItem() {
    console.log("item click",this.el.nativeElement.classList.add("hello"))
  }

}
