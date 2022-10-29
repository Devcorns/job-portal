import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import {map,filter,concatAll} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hiring';
  ngOnInit() {

  }

  
}
























//observable example

// arr1=[1,2,3,4,5,6,7];
// arr2=["a","b","c","d"];



// myObservable2 = from(this.arr1);




// myObservable = new Observable((observe)=>{
//   setTimeout(()=>{
//     observe.next(()=>
//     console.log("hello")
//   )
//   },3001)
//   setTimeout(()=>{
//     observe.next("2")

//   },3000)
//   // setTimeout(()=>{
//   //   observe.error("something not working")

//   // },3000)

//   setTimeout(()=>{
//     observe.next("3")

//   })

//   setTimeout(()=>{
//     observe.next("4")

//   },3000)
//   setTimeout(()=>{
//     observe.complete()

//   })

// })

// getObservable2 = this.myObservable2.pipe(map((val)=>{
//   return val
// }),filter((val)=>val>1))

// ngOnInit() {
//   // this.myObservable.subscribe((val)=>{
//   //   if(typeof val=="function") {
//   //     console.log("inside if condition")
//   //     val()
//   //   } else {
//   //     console.log(val)
//   //   }
//   //   // console.log(val);
//   // },(err)=>{
//   //   console.log(err)
//   // },()=>{
//   //   alert("transactions is completed")
//   // })

//   this.getObservable2.subscribe((val)=>{
//     //return val;
//     return console.log(val)
//   },(err)=>console.log(err),()=>console.log("observable 2 completed successfully"))

//   // console.log("my observable 2",this.getObservable2.subscribe((val)=>console.log(val)))

// }
