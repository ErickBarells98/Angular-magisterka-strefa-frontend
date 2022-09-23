import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AvailableCoursesService {

  constructor(private http: HttpClient) { }

  mySemestrCourses: Array<any> = [];
  restCourses: Array<any> = [];

  mySemestrLoaded: boolean = false;
  restCourseLoaded: boolean = false;

  fetchCourses(){
    this.http.get<any>('api/Course/getCourses?semestr='+true)
    .subscribe({
      next: res => {
        this.mySemestrCourses = res;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.mySemestrLoaded = true;
      }
    })

    this.http.get<any>('api/Course/getCourses?semestr='+false)
    .subscribe({
      next: res => {
        this.restCourses = res;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.restCourseLoaded = true;
      }
    })
  }

}
