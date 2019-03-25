import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { PrsServiceService } from './prs-service.service';

@Injectable()
export class SprintService {
  currentSprint;
  prs;
  constructor(private db: AngularFireDatabase, private auth: AuthService, private prService: PrsServiceService) { }

  getCurrentSprint(){
    return this.db.object('/sprint');
  }
  async postCurrentSprint(currentSprint){
    await this.saveSprintData();
    await this.db.object('/sprint').update(currentSprint);
    await this.prService.deleteAllPrs();
  }
  async saveSprintData(){
    await this.getCurrentSprint().subscribe(sprint => this.currentSprint = sprint);
    await this.prService.getAll().subscribe(prs => {
      this.prs = prs
      this.db.object('/logs/' + this.currentSprint.currentSprint).update({
        sprintNumber: this.currentSprint.currentSprint,
        startDate: this.currentSprint.startDate,
        endDate: this.currentSprint.endDate,
        allPrs: {
          ...this.prs
        }
      });
    })
  }
  getSprintData(sprintNumber){
    return this.db.object('/logs/' + sprintNumber);
  }
}
