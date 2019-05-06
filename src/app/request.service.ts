import { RequestedUser } from './models/requestedUser';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap'


@Injectable()
export class RequestService {
  requestedUsers;
  appUser;
  constructor(private db: AngularFireDatabase, private auth: AuthService, private userService: UserService) {
    this.auth.appUser$.subscribe(user => this.appUser = user);
  }
  request(appUser){
    return this.db.object('/requests/' + appUser.$key).update({
      uId : appUser.$key,
      name: appUser.name,
      email: appUser.email,
      photoUrl: appUser.photoUrl
    })
  }
  isCurrentUserInRequestedUsers(appUser){
    return this.db.list('/requests/' + appUser.$key);
  }
  getAllRequests(){
    return this.db.list('/requests');
  }
  remove(uId){
    return this.db.object('/requests/' + uId).remove();
  }
  //release tracker methods
  rtRequest(appUser){
    return this.db.object('/rt-requests/' + appUser.$key).update({
      uId : appUser.$key,
      name: appUser.name,
      email: appUser.email,
      photoUrl: appUser.photoUrl
    })
  }
  isCurrentUserInRtRequestedUsers(appUser){
    return this.db.list('/rt-requests/' + appUser.$key);
  }
  getAllRtRequests(){
    return this.db.list('/rt-requests');
  }
  removeRt(uId){
    return this.db.object('/rt-requests/' + uId).remove();
  }
}
