import { SprintService } from './../sprint.service';
import { LogsService } from './../logs.service';
import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation, fadeOutOnLeaveAnimation, fadeInOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({
      duration: 400
    }),
    slideInDownAnimation()
  ]
})
export class LogsComponent {
  logs$;
  selectedSprint;
  sprintData = {};
  constructor(private logs: LogsService, private sprint: SprintService) {
    this.logs$ = this.logs.getSprintsDropdown();
  }
  selectedSprintNumber(value){
    this.selectedSprint = value;
    this.sprint.getSprintData(value).subscribe(data => {
      this.sprintData = data;
     // console.log(this.sprintData);
    })
  }
  // openAll(){
  //   this.logs.getSprintsDropdown().subscribe(logs => {
  //     logs.map(log => {
  //       if(log.sprintNumber == this.selectedSprint){
  //         log.allPrs.map(pr => {
  //           window.open(pr.link, '_blank');
  //         })
  //       }
  //     })
  //   })
  // }
}

      

