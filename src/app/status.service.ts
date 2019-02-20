import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class StatusService {

  constructor(private db: AngularFireDatabase) { }

  getStatuses(){
    return this.db.list('/statuses');
  }

}
