import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormRegister } from '../interfaces/FormRegister';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { FormLogin } from '../interfaces/FormLogin';
import { UserState } from '../interfaces/UserState';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private router: Router) { }

  userState: UserState = {
    username: '',
    jwt: '',
    roles: [],
    userid: '',
    creationDate: ''
  } as UserState;

  isLogged: boolean = false;
  loading: boolean = false;

  fetchUserByRefreshToken(){

  }

  register(newUser: FormRegister){
    const bodyRegisterData = {
      email: newUser.email,
      name: newUser.name,
      surname: newUser.surname,
      password: newUser.password,
      studiesType: parseInt(newUser.studiesType),
      studiesLvl: parseInt(newUser.studiesLvl),
      semester: parseInt(newUser.semester),
      fieldOfStudy: parseInt(newUser.fieldOfStudy[0])
    }
    console.log(bodyRegisterData)
    const headers = { 'Content-Type':'application/json' }  
    this.http.post<any>('https://localhost:44363/api/auth/register',bodyRegisterData,{ headers })
    .pipe(
      finalize(() => {
        //done
      })
    )
    .subscribe({
      next: res => {
          
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.router.navigate(['/login']);
      }
    })
  }

  login(loginData: FormLogin){
      this.loading = true;
      const headers = { 'Content-Type':'application/json' }  
      this.http.post<any>('https://localhost:44363/api/auth/login',{username: loginData.email, password: loginData.password},{headers,withCredentials: true})
      .subscribe({
        next: res => {
          const logged_user = {
            username: res.email,
            jwt: res.jwt,
            roles: res.roles,
            userid: res.userID,
            creationDate: res.creationDate
          };
          console.log(logged_user);
          this.userState = logged_user;
          console.log(this.userState)
          //localStorage.setItem("userLogged","true");
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          this.loading = false;
          this.isLogged = true;
          this.router.navigate(['/'])
        }
      })
  }

}
