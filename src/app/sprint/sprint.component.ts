import { SprintService } from './../sprint.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SprintInfo } from '../models/sprintInfo';
import { slideInDownAnimation } from 'angular-animations';


@Component({
  selector: 'sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css'],
  animations: [
    slideInDownAnimation()
  ]
})
export class SprintComponent {
  appUser = {};   
  sprintInfo: SprintInfo = {
    currentSprint: null,
    startDate: '',
    endDate: ''
  };
  constructor(private auth: AuthService, private sprint: SprintService) { 
    auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    });
    this.sprint.getCurrentSprint().subscribe(sprintInfo => {
        this.sprintInfo = sprintInfo;
        this.sprintInfo.startDate = this.sprintInfo.startDate.split('-').join('/').substr(5);
        this.sprintInfo.endDate = this.sprintInfo.endDate.split('-').join('/').substr(5);
        //console.log(this.sprintInfo);
    })
  }


}
