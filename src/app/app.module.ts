import { LogsService } from './logs.service';
import { RequestService } from './request.service';
import { ActiveUsersService } from './active-users.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { RouterModule } from '@angular/router'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import {TimeAgoPipe} from 'time-ago-pipe';
import { FormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbdDatepickerPopup } from './datepicker-popup';




import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { PrsServiceService } from './prs-service.service';
import { PrFormComponent } from './pr-form/pr-form.component';
import { StatusService } from './status.service';
import { RequestComponent } from './request/request.component';
import { RequestListComponent } from './request-list/request-list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { UndoComponent } from './undo/undo.component';
import { SprintComponent } from './sprint/sprint.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { SprintService } from './sprint.service';
import { LogsComponent } from './logs/logs.component';




@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    ManageUsersComponent,
    TimeAgoPipe,
    PrFormComponent,
    RequestComponent,
    RequestListComponent,
    SpinnerComponent,
    UndoComponent,
    SprintComponent,
    NewSprintComponent,
    NgbdDatepickerPopup,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    SortablejsModule.forRoot({
      animation: 200,
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },

      { path: 'new-pr', component: PrFormComponent, canActivate: [AuthGuard]},
      { path: 'prs/:id', component: PrFormComponent, canActivate: [AuthGuard]},
      { path: 'new-sprint', component: NewSprintComponent, canActivate: [AuthGuard]},
      { path: 'logs', component: LogsComponent, canActivate: [AuthGuard]},

      { path: 'admin/manage-users', component: ManageUsersComponent , canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/requests', component: RequestListComponent , canActivate: [AuthGuard, AdminAuthGuard]}
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    PrsServiceService,
    StatusService, 
    ActiveUsersService,
    RequestService,
    SprintService,
    LogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
