import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent {
  appUser = {};   
  sprintNumber = 10;
  constructor(private auth: AuthService) { 
    auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      console.log(this.appUser);
    });
  }


}
