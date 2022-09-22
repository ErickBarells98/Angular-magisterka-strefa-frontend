import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-frontend-strefa-magisterka';

  constructor(private userService: UserService){}

  userServiceData: UserService = this.userService;

  ngOnInit(){
    this.userService.fetchUserByRefreshToken();
  }
}
