import { Injectable, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService implements OnInit {

  constructor(private req: RequestsService) {
    console.log("get uSer service works")
    //console.log(this.req.getRequest(this.usrListUrl).subscribe(response=>response))
  }

  //usrListUrl:string="";
  ngOnInit() {

  }
  getAllUserList (url:string) {
    return this.req.getRequest(url);
  }

  getSingleUser (url:string) {
    return this.req.getRequest(url);
  }
}
