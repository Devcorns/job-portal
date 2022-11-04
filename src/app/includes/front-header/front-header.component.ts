import { Component, OnInit, ViewChild } from "@angular/core";

import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

// import ext from "./../../json-apis/experience";
import exp from './../../json-apis/experience.json';
import jobprofile from './../../json-apis/jobprofiles.json';
import jobfield from './../../json-apis/job-field.json';

interface expListInterface {
    id:number,
    title: string,
}
interface jobListInterface {
    id:number,
    title:string
}
interface jobFiledInterface {
    id:number,
    title: string,
    target:URL
}

@Component({
    selector:'app-front-header',
    templateUrl:'./front-header.component.html',
    //styleUrls:[""]
})

 export class FrontHeaderComponent implements OnInit {

    expList:expListInterface[] = exp;
    jobList:jobListInterface[] = jobprofile;
    jobField:jobFiledInterface[] = jobfield;
    experience_title:string="Experience";
    location_title:string="Location";
    jobtitle=""


    @ViewChild('expDropdown', { static: true })
    expdropdown!: NgbDropdown;
    @ViewChild('locDropdown',{static: true})
    locdropdown!:NgbDropdown;
    logo= "<Hire Me />"
    ngOnInit() {
        
    }

    getExp(val:string) {
        this.experience_title = val
    }
    getLoc(val:string) {
        this.location_title = val
    }
    searchHandle() {
        console.log({exp:this.experience_title,loc:this.location_title,job:this.jobtitle})
    }
    
}

