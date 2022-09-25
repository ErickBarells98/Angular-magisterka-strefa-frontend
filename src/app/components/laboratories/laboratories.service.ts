import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LaboratoryDetails } from 'src/app/interfaces/LaboratoryDetails';

@Injectable()
export class LaboratoriesService {

  constructor(private http: HttpClient) { }

  fetchLaboratoryData(id: string){
    return this.http.get<LaboratoryDetails>('api/Course/'+id);
  }

}
