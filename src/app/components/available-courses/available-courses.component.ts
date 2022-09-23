import { Component, OnInit } from '@angular/core';
import { AvailableCoursesService } from './available-courses.service';

@Component({
  selector: 'app-available-courses',
  templateUrl: './available-courses.component.html',
  styleUrls: ['./available-courses.component.css']
})
export class AvailableCoursesComponent implements OnInit {

  constructor(private availableCoursesService: AvailableCoursesService) { }

  availableCoursesServiceData = this.availableCoursesService;
  
  active = 1;

  ngOnInit(): void {
    this.availableCoursesService.fetchCourses();
  }

}
