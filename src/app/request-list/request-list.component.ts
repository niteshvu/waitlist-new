import { fade } from './../../animation';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
  animations: [
    fade
  ]
})
export class RequestListComponent  {
  requests;
  constructor(private requestService: RequestService, private userService: UserService) {
    this.requestService.getAllRequests().subscribe(req => this.requests = req);
  }
  accept(uId){
    this.requestService.remove(uId);
    this.userService.update(uId, {
      isUser: true
    })
  }
  decline(uId){
    return this.requestService.remove(uId);
  }
 
}
