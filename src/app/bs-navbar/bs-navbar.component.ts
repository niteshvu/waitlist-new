import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { RequestService } from './../request.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { PrsServiceService } from '../prs-service.service';
import { copyStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  requests;
  rtRequests;
  allowMoving;
  isCollapsed = true;
  appSwitch = null;
  constructor(private auth: AuthService, private requestService: RequestService, private router: Router, private prsService: PrsServiceService, private route: ActivatedRoute) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.requestService.getAllRequests().subscribe(requests => this.requests = requests.length);
    this.requestService.getAllRtRequests().subscribe(requests => this.rtRequests = requests.length);
    prsService.getSortable().subscribe(value => this.allowMoving = value.value)
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart){
          this.appSwitch = event.url;
      }
    })
  }
  login(){
    let returnUrl = this.appSwitch || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.router.navigate(['/login']);
  }
  logout() {
    this.auth.logout();
  }
  sortSwitch(value){
    this.prsService.sortSwitch(value);
  }
}
