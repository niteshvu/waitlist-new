import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';

@Injectable()
export class LogsService {

  constructor(private db: AngularFireDatabase, private auth: AuthService) { }
  getSprintsDropdown(){
    return this.db.list('/logs');
  }
}
