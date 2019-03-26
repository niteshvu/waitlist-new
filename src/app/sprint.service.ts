import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { PrsServiceService } from './prs-service.service';

@Injectable()
export class SprintService {
  previousSprint;
  prs;
  constructor(private db: AngularFireDatabase, private auth: AuthService, private prService: PrsServiceService) {
    this.prService.getAll().subscribe(prs => {
      this.prs = prs
    })
  }
  getCurrentSprint(){
    return this.db.object('/sprint');
  }
  async postCurrentSprint(currentSprint){
    this.getCurrentSprint().subscribe(async sprintInfo => {
      if(sprintInfo.currentSprint){
         await this.db.object('/logs/' + sprintInfo.currentSprint).update({
           ...sprintInfo,
           prs: this.prs
         })
         await this.db.object('/sprint').update(currentSprint);
         await this.db.object('/prs').remove();
      }
      else{
        this.db.object('/sprint').update(currentSprint)
      }
    }).unsubscribe();
  }
  
  getSprintData(sprintNumber){
    return this.db.object('/logs/' + sprintNumber);
  }
}
