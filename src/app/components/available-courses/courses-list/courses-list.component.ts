import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor() { }

  @Input() courses: any = {};
  @Input() isLoaded: boolean = false;

  ngOnInit(): void {
  }

}
