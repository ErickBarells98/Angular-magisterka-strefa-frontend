import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from './course.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  requestJoin: string = 'not set';

  constructor(private courseService: CourseService, private route: ActivatedRoute, private location: Location) {
    this.subscription = this.courseService.buttonVisibilityChange.subscribe((value) => {
      this.requestJoin = value;
    });
  }

  id: string = '';
  
  courseServiceData: CourseService = this.courseService;
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.courseService.fetchCourseData(this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goBack() {
    this.location.back();
  }

  joinCourse() {
    this.courseService.sentJoinRequest(this.id);
  }

}
