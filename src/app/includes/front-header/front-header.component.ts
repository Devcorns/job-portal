import { Component, OnInit, ViewChild } from "@angular/core";

import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

// import ext from "./../../json-apis/experience";
import exp from './../../json-apis/experience.json';
import jobprofile from './../../json-apis/jobprofiles.json';

@Component({
    selector:'app-front-header',
    templateUrl:'./front-header.component.html',
    //styleUrls:[""]
})

 export class FrontHeaderComponent implements OnInit {

    expList:{id:number, title:string}[] = exp;
    jobList:{id:number,title:string}[] = jobprofile;
    experience_title:string="Experience";
    location_title:string="Location";
    jobtitle=""

    @ViewChild('expDropdown', { static: true })
    expdropdown!: NgbDropdown;
    @ViewChild('locDropdown',{static: true})
    locdropdown!:NgbDropdown;
    logo= "<Hire Me />"


     

    ngOnInit() {
        // console.log(this.countryList)
        // this.expdropdown.open()    
        // this.locdropdown.open()    
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

