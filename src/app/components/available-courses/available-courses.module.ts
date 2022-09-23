import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableCoursesService } from './available-courses.service';
import { AvailableCoursesComponent } from './available-courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './courses-list/course-item/course-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [AvailableCoursesComponent, CoursesListComponent, CourseItemComponent],
  providers: [AvailableCoursesService],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [AvailableCoursesComponent]
})
export class AvailableCoursesModule { }
