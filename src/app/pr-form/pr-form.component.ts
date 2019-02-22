import { Pr } from './../models/pr';
import { ActiveUsersService } from './../active-users.service';
import { AuthService } from './../auth.service';
import { StatusService } from './../status.service';
import { PrsServiceService } from './../prs-service.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-pr-form',
  templateUrl: './pr-form.component.html',
  styleUrls: ['./pr-form.component.css']
})
export class PrFormComponent {
  statuses$;
  appUser: AppUser;
  activeUsers = [];
  prs: Pr[];
  pr;
  id;
  constructor(private prService: PrsServiceService,
              private statusService: StatusService, 
              private auth: AuthService, 
              private activeUserService: ActiveUsersService,
              private router: Router,
              private route: ActivatedRoute) {
    this.statuses$ = this.statusService.getStatuses();
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.activeUserService.getActiveUsers().subscribe(users => this.activeUsers = users.filter(user => user.isUser == true));
    this.prService.getAll().subscribe(pr => this.prs = pr);

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.prService.get(this.id).take(1).subscribe(pr => this.pr = pr);
    }
  }

  save(formData){
    let sortId = this.prs.length + 1;
    let date = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+
                ' '+new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    let newFormData: Pr = {
      ...formData,
      sortId: sortId,
      createdDate: date
    };
    //console.log(newFormData);
    if(this.id) this.prService.update(this.id, formData);
    else this.prService.create(newFormData);
    this.router.navigate(['/']);
  }

  delete(){
    this.prService.delete(this.id);
    this.router.navigate(['/']);
    this.prService.updateAfterRearrange(this.prs);
  }
}
