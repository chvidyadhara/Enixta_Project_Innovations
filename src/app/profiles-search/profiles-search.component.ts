import { Component, OnInit } from '@angular/core';
import { UserProfileSerService } from '../user-profile-ser.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-profiles-search',
  templateUrl: './profiles-search.component.html',
  styleUrls: ['./profiles-search.component.css']
})
export class ProfilesSearchComponent implements OnInit {
  userdisplay;
  pageOfItems: Array<any>;
  
  constructor(private serv:UserProfileSerService) { }

  userdata(){
    this.serv.userprofile().subscribe(result=>{
            this.userdisplay = result;
            console.log(this.userdisplay)
          
    })
  }
  

  ngOnInit() {
    this.userdata()
  
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    
}
      
      
  // isShowDivIf = false;
  
  // toggleDisplayDivIf() {
  //   this.isShowDivIf = !this.isShowDivIf;
  // }
  showDiv = {
    next : false
  }



   } 
