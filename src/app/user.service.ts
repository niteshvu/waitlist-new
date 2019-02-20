import { AppUser } from './models/app-user';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 

@Injectable()
export class UserService {
  users;
  constructor(private db: AngularFireDatabase) { }

  getAllUsers(){
    return this.db.list('/users');
  }

  save(user: firebase.User) {
    this.getAllUsers().subscribe(u => {
      this.users = u;
      let exists = this.users.find(u => u.$key === user.uid);

      if(exists){
        this.db.object('/users/' + user.uid).update({
          name: user.displayName,
          email: user.email
        });
      }
      else{
        this.db.object('/users/' + user.uid).update({
          name: user.displayName,
          email: user.email,
          isAdmin: false,
          isUser: false,
          photoUrl: user.photoURL
        });
      }
    });
    
  }

  get(uid: string): FirebaseObjectObservable<AppUser> { 
    return this.db.object('/users/' + uid);
  }
  update(uid, object){
    return this.db.object('/users/' + uid).update(object);
  }
}
