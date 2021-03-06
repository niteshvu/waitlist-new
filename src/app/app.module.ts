import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HeadingComponent } from './heading/heading.component';
import { RtHomeComponent } from './rt-home/rt-home.component';
import { LandingComponent } from './landing/landing.component';
import { RtRequestComponent } from './rt-request/rt-request.component';
import { RtRequestListComponent } from './rt-request-list/rt-request-list.component';
import { RtAdminAuthGuardService } from './rt-admin-auth-guard.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimelineComponent } from './timeline/timeline.component';

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
    LogsComponent,
    HeadingComponent,
    RtHomeComponent,
    LandingComponent,
    RtRequestComponent,
    RtRequestListComponent,
    SidebarComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule.forRoot(),
    SortablejsModule.forRoot({
      animation: 200,
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'waitlist', component: HomeComponent},
      { path: 'release-tracker', component: RtHomeComponent},

      { path: 'waitlist/new-pr', component: PrFormComponent, canActivate: [AuthGuard]},
      { path: 'waitlist/prs/:id', component: PrFormComponent, canActivate: [AuthGuard]},
      { path: 'waitlist/new-sprint', component: NewSprintComponent, canActivate: [AuthGuard]},
      { path: 'waitlist/logs', component: LogsComponent, canActivate: [AuthGuard]},

      { path: 'waitlist/admin/manage-users', component: ManageUsersComponent , canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'waitlist/admin/requests', component: RequestListComponent , canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'release-tracker/admin/requests', component: RtRequestListComponent , canActivate: [AuthGuard, AdminAuthGuard, RtAdminAuthGuardService]}
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
    LogsService,
    RtAdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
