import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

  constructor() { }

  @Input() dataforchild:any;

  ngOnChanges() {
    console.log("ngOnChagnes",this.dataforchild)
  }
  ngOnInit(): void {
  }

}
