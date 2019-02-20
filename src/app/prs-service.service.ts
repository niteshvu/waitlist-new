import { Pr } from './models/pr';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { async } from 'q';

@Injectable()
export class PrsServiceService {

  constructor(private db: AngularFireDatabase) {
  }
  create(pr:Pr){
    this.db.list('/prs').push(pr);
  }
  getAll(){
    return this.db.list('/prs',{
      query:{
        orderByChild: "sortId"
      }
    });
  }
  get(prId){
    return this.db.object('/prs/' + prId);
  }
  update(prId, pr:Pr){
    //console.log(prId, pr);
    return this.db.object('/prs/' + prId).update(pr);
  }
  delete(prId){
    console.log(prId);
    return this.db.object('prs/' + prId).remove();
  }
  async updateAfterRearrange(prs){
    if(prs){
      let index = 1;
      for(let pr of prs){
        await this.db.object('/prs/' + pr.$key).update({
          sortId: index
        })
        index++;
      }
    }
    else{
      return;
    }
  }
  getSortable(){
    return this.db.object('/sort/canSort');
  }
  sortSwitch(value){
    return this.db.object('/sort/canSort').update({
      value: value
    })
  }
}
