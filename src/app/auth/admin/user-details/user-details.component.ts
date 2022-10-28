import { Component, OnInit } from '@angular/core';
import { Router,ParamMap, ActivatedRoute } from '@angular/router';
import { GetUsersService } from 'src/app/commonservices/user/get-users.service';

export interface userInfo {
  id:number,
  name:string,
  username:string,
  email:string,
  address: {
    city:string
  }

}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  usrUrl = "https://jsonplaceholder.typicode.com/users"
  usrData:any;
  constructor(private userService: GetUsersService,private router: Router,private route: ActivatedRoute) {
    // let usrData:userInfo
    this.userService.getSingleUser(this.usrUrl+"/"+this.route.snapshot.paramMap.get('id')).subscribe(response=>{
      this.usrData = response
    })
    //console.log(this.route.snapshot.paramMap.get('id'))

   }

  ngOnInit(): void {

  }

  getUserInfo() {
    console.log(this.usrData)
  }




}
