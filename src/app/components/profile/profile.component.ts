import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/interfaces/UserProfile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, private userService: UserService) { }

  userProfile: UserProfile = {} as UserProfile;

  ngOnInit(): void {
    this.fetchUserProfileData()
  }

  fetchUserProfileData(){
    this.http.get<UserProfile>(`api/MyProfile/${this.userService.userState.userid}`)
    .subscribe({
      next: res => {
        this.userProfile = res;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {

      }
    })
  }
}
