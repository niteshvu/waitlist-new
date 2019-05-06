import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-rt-request-list',
  templateUrl: './rt-request-list.component.html',
  styleUrls: ['./rt-request-list.component.css']
})
export class RtRequestListComponent {
  requests;
  constructor(private requestService: RequestService, private userService: UserService) {
    this.requestService.getAllRtRequests().subscribe(req => this.requests = req);
  }
  accept(uId){
    this.requestService.removeRt(uId);
    this.userService.update(uId, {
      rtUser: true
    })
  }
  decline(uId){
    return this.requestService.removeRt(uId);
  }
 
}
