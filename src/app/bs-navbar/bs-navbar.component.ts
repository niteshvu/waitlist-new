import { Router } from '@angular/router';
import { RequestService } from './../request.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { PrsServiceService } from '../prs-service.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;
  requests;
  allowMoving;
  isCollapsed = true;
  constructor(private auth: AuthService, private requestService: RequestService, private router: Router, private prsService: PrsServiceService) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.requestService.getAllRequests().subscribe(requests => this.requests = requests.length);
    prsService.getSortable().subscribe(value => this.allowMoving = value.value)
  }

  logout() {
    this.auth.logout();
  }
  openRequests(){
    this.router.navigate(['/admin/requests']);
  }
  sortSwitch(value){
    this.prsService.sortSwitch(value);
  }
}
