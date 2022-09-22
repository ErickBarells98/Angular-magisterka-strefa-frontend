import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormRegister } from '../interfaces/FormRegister';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { FormLogin } from '../interfaces/FormLogin';
import { UserState } from '../interfaces/UserState';
import { BYPASS_LOG } from '../utils/interceptors/jwt.interceptor';

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
  initialLoadData: boolean = false;

  fetchUserByRefreshToken(){
      if(!this.isLogged){
          const userLogged = localStorage.getItem("userLogged");
          if(userLogged){
              this.initialLoadData = true;
              this.http.post<any>('api/auth/refresh',{},{ context: new HttpContext().set(BYPASS_LOG, true), withCredentials: true})
              .subscribe({
                next: res => {
                    const logged_user = {
                      username: res.email,
                      jwt: res.jwt,
                      roles: res.roles,
                      userid: res.userID,
                      creationDate: res.creationDate
                    };

                    this.userState = logged_user;
                },
                error: error => {
                  console.log(error);
                },
                complete: () => {
                  this.initialLoadData = false;
                  this.isLogged = true;
                }
              })
          }
      }
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
    const headers = { 'Content-Type':'application/json' }  
    this.http.post<any>('api/auth/register',bodyRegisterData,{ context: new HttpContext().set(BYPASS_LOG, true), headers })
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
      this.http.post<any>('api/auth/login',{username: loginData.email, password: loginData.password},{ context: new HttpContext().set(BYPASS_LOG, true) , headers , withCredentials: true})
      .subscribe({
        next: res => {
          const logged_user = {
            username: res.email,
            jwt: res.jwt,
            roles: res.roles,
            userid: res.userID,
            creationDate: res.creationDate
          };
          this.userState = logged_user;
          localStorage.setItem("userLogged","true");
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

  logout(){
    this.loading = true;
    this.http.get('api/auth/logout',{withCredentials: true})
    .subscribe({
      next: res => {
        localStorage.clear();
        const clearUser = {
            username: '',
            jwt: '',
            roles: [],
            userid: '',
            creationDate: ''
        };
        this.userState = clearUser;
        this.isLogged = false;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        this.router.navigate(['/'])
      }
    })
    
  }

  refreshToken(){
    return this.http.post('api/auth/refresh',{});
  }

}
