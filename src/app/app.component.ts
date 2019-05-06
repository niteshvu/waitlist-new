import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { UserService } from './user.service';
import { Router, ActivatedRoute, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {

      if (user) {
        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        if(returnUrl){
          router.navigateByUrl(returnUrl);
          localStorage.removeItem('returnUrl');        
        }
      }
    });
  }
}
