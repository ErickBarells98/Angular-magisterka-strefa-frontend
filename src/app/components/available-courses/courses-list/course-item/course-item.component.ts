import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  constructor() { }

  @Input() coursesForSemestr: Array<any> = [] as Array<any>;

  ngOnInit(): void {
  }

}
