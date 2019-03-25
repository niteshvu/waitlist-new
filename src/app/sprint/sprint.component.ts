import { SprintService } from './../sprint.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent {
  appUser = {};   
  sprintNumber;
  constructor(private auth: AuthService, private sprint: SprintService) { 
    auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    });
    this.sprint.getCurrentSprint().subscribe(sprintNumber => {
      this.sprintNumber = sprintNumber.currentSprint;
    })
  }


}
