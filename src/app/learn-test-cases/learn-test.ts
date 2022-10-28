import { Component } from "@angular/core";

@Component({
  selector:'app-learn-test',
  styleUrls:[],
  templateUrl:"./learn-test.html"
})
class LearnTest {
  testTitle = "Test Title";
  constructor() {
    console.log("learn test");
  }



}

export default LearnTest;
