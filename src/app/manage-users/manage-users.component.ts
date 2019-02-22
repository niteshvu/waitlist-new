import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  users;
  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(user => {this.users = user; console.log(this.users)});
  }
  editAdmin(uid, value){
    return this.userService.editAdmin(uid, value);
  }
  editUser(uid, value){
    return this.userService.editUser(uid, value);
  }
}
