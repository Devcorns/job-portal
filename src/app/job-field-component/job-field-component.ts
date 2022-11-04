import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RequestsService } from "../commonservices/requests.service";

@Component ({
    templateUrl:"./job-field-component.html",
    selector: "app-job-field",
    styleUrls:["./app-job-field.scss"]
})
export class JobFieldComponent implements OnInit {
    constructor(private route:ActivatedRoute,private rqst:RequestsService) {
        console.log("job field constructor")
        // console.log(this.route.snapshot.paramMap.get('field-id'))
    }

    ngOnInit() {
        switch(this.route.snapshot.paramMap.get('field-id')) {
            case "mobile-application":
                this.rqst
                .getRequest("https://jsonplaceholder.typicode.com/users")
                .subscribe((res)=>console.log(res))
                break;
            case "frontend-developer":
                this.rqst
                .getRequest("https://jsonplaceholder.typicode.com/users")
                .subscribe((res)=>console.log(res))
                break;
        }
    }

}