import { CanSort } from '../models/canSort';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Pr } from './../models/pr';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { PrsServiceService } from '../prs-service.service';
// import 'rxjs/add/operator/take';
import { SortablejsOptions } from 'angular-sortablejs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {
  prs: Pr[] =[];
  appUser = {};   
  // filteredPrs: any[] = [];
  searchResults = [];
  sortable;
  constructor(private prService: PrsServiceService, private auth: AuthService) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    //prsService.getAll().subscribe(pr => this.filteredPrs = this.prs = pr);  
    prService.getAll().subscribe(pr => this.prs = pr);   
    prService.getSortable().subscribe(value => {
      this.sortable = value.value;
      this.scrollableOptions = {
        ...this.scrollableOptions,
        sort: this.sortable
      }
    })
  } 
  
  private onDrop(event: any) {
   //console.log("posting");
   this.prService.updateAfterRearrange(this.prs);

  }
  scrollableOptions: SortablejsOptions = {
    scroll: true,
    scrollSensitivity: 50,
    onUpdate: e => this.onDrop(e),
    handle: ".fa-arrows"
  };
  delete(prId){
    this.prService.delete(prId);
    this.prService.updateAfterRearrange(this.prs);
  }
}
