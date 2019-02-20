import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ActiveUsersService {

  constructor(private db: AngularFireDatabase, private userService: UserService) { }

  getActiveUsers(){
    return this.userService.getAllUsers();
  }
}
