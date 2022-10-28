import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/commonservices/user/get-users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userList:any = [];
  usrListUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private userService: GetUsersService) {}

  ngOnInit(): void {
    this.userService.getAllUserList(this.usrListUrl).subscribe(response=>{
      this.userList = response
      //console.log(this.userList)
    })
  }

  getAllUserList() {


  }


}
