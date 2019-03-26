import { SprintService } from './../sprint.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, slideInDownAnimation } from 'angular-animations';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent {
  Sprintnumber;
  startDate;
  endDate;
  constructor(private router: Router, private sprint: SprintService) { 
  }
  getData(value){
    //console.log(value);
    let startDate = `${value.startDate.year}-${value.startDate.month}-${value.startDate.day}`
    let endDate = `${value.startDate.year}-${value.startDate.month}-${value.endDate.day}`
    this.sprint.postCurrentSprint({
      currentSprint: value.sprintNumber,
      startDate: startDate,
      endDate: endDate
    })
    this.router.navigate(['/']);
  }
  cancel(){
    this.router.navigate(['/']);
  }
}
