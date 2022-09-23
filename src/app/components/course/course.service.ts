import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CourseDetails } from 'src/app/interfaces/CourseDetails';

@Injectable()
export class CourseService {
  //requestSatus: string = 'not sent';

  buttonVisibilityChange: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { 
    // this.buttonVisibilityChange.subscribe((value) => {
    //   this.requestSatus = value;
    // });
  }

  courseDetailsData: CourseDetails = {} as CourseDetails;
  isLoaded: boolean = false;
  
  //A LITTLE BAD IDEA OF GETTING DATA TO FRONT, SHOULD BE RETURNING OBSERVABLE AND SUBSCRIBE AT FRONT
  fetchCourseData(id: string){
    this.http.get<CourseDetails>('api/Course/'+id)
    .subscribe({
      next: res => {
        this.courseDetailsData = {
          ID: res.ID,
          Name: res.Name,
          Description: res.Description,
          CourseTypeId: res.CourseTypeId,
          CreationDate: res.CreationDate,
          Year: res.Year,
          Avalible: res.Avalible,
          EntryState: res.EntryState,
          IsApplicant: res.IsApplicant,
          IsParticipant: res.IsParticipant,
          IsMaster: res.IsMaster,
          IsDeleted: res.IsDeleted,
          Laboratories: res.Laboratories,
          Lectures: res.Lectures,
          StudiesTypeId: res.StudiesTypeId,
          AvalibleStudiesTypes: res.AvalibleStudiesTypes,
          StudiesTYpe: res.StudiesTYpe,
          StudiesLevelId: res.StudiesLevelId,
          StudiesLevel: res.StudiesLevel,
          AvalibleStudiesLevels: res.AvalibleStudiesLevels,
          CourseParticipantsCount: res.CourseParticipantsCount,
          SemesterNumber: res.SemesterNumber,
          AvalibleStudiesSemesters: res.AvalibleStudiesSemesters,
          MaxPoints: res.MaxPoints,
          HasProject: res.HasProject,
          ProjectMaxPoints: res.ProjectMaxPoints,
          Masters: res.Masters,
          DisplayYear: res.DisplayYear
        }
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.isLoaded = true;
        if(this.courseDetailsData.IsApplicant){
          this.buttonVisibilityChange.next('sent');
        }
        else if(this.courseDetailsData.IsParticipant){
          this.buttonVisibilityChange.next('approved');
        }
        else{
          this.buttonVisibilityChange.next('not sent');
        }
      }
    })

    return this.courseDetailsData;
  }

  sentJoinRequest(id: string) {
    if(this.isLoaded && (!this.courseDetailsData.IsApplicant || !this.courseDetailsData.IsParticipant)){
        this.http.get(`api/Course/joinCourse?id=${id}`)
        .subscribe({
          next: res => {

          },
          error: error => {
            console.log(error);
          },
          complete: () => {
            this.buttonVisibilityChange.next('sent');
          }
        })
    }
  }
}
