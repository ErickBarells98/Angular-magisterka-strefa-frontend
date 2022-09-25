import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, switchMap, throwError } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

export const BYPASS_LOG = new HttpContextToken(() => false);

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.context.get(BYPASS_LOG) === true){
        const apiReq = request.clone({url: `https://localhost:44363/${request.url}`});
        return next.handle(apiReq);
    }
    

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.userState.jwt}`,
    })

    const authApiReq = request.clone(
      {
        url: `https://localhost:44363/${request.url}`,
        headers: headers,
        withCredentials: true
      });

    return next.handle(authApiReq).pipe(
      catchError(errordata => {
          if(errordata.status === 401){
              return this.handle401Error(authApiReq,next);
          }
          return throwError(() => errordata);
      })
    )
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler){
      if(!this.isRefreshing){
        this.isRefreshing = true;
        
        if(this.userService.isLogged){
          return this.userService.refreshToken().pipe(
            //SWITCHMAP EXP.. nie jestem zainteresowany poprzednia odpowiedzia i przechodze na nowy strumien observable
            switchMap((res: any) => {
              this.userService.setJwt(res.jwt);

              const headers = new HttpHeaders({
                'Authorization': `Bearer ${res.jwt}`,
              });

              const newJwtReq = request.clone({
                headers: headers
              });
              
              this.isRefreshing = false;
              return next.handle(newJwtReq);
            }),
            catchError((error) => {
              this.isRefreshing = false;

              if(error.status == '401') {
                this.userService.logout();
              }
              
              return throwError(() => error);
            })
          )
        }       
      }
      return next.handle(request);
  }
}
