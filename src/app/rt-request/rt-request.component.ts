import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'rt-request',
  templateUrl: './rt-request.component.html',
  styleUrls: ['./rt-request.component.css']
})
export class RtRequestComponent{
  appUser;
  isRequested = false;
  constructor(private auth: AuthService, private requesService: RequestService) { 
    this.auth.appUser$.subscribe(user => {
      this.appUser = user
      if(this.appUser) this.requesService.isCurrentUserInRtRequestedUsers(this.appUser).subscribe(list => (list.length > 0) ? this.isRequested = true : false);
      //console.log(this.appUser)
    });
  }
  rtRequest(){
    this.requesService.rtRequest(this.appUser);
  }
}
