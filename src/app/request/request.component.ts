import { AuthService } from './../auth.service';
import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  appUser;
  isRequested = false;
  constructor(private auth: AuthService, private requesService: RequestService) { 
    this.auth.appUser$.subscribe(user => {
      this.appUser = user
      if(this.appUser) this.requesService.isCurrentUserInRequestedUsers(this.appUser).subscribe(list => (list.length > 0) ? this.isRequested = true : false);
    });
    
  }
  request(){
     return this.requesService.request(this.appUser);
  }
}
