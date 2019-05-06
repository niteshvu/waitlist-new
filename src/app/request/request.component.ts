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
  constructor(private auth: AuthService, private requestService: RequestService) { 
    this.auth.appUser$.subscribe(user => {
      this.appUser = user
      if(this.appUser) this.requestService.isCurrentUserInRequestedUsers(this.appUser).subscribe(list => (list.length > 0) ? this.isRequested = true : false);
    });
    
  }
  request(){
     return this.requestService.request(this.appUser);
  }
}
