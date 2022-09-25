import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { LaboratoriesModule } from '../laboratories/laboratories.module';
import { LecturesModule } from '../lectures/lectures.module';

@NgModule({
  declarations: [
    CourseComponent
  ],
  providers: [CourseService],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    LaboratoriesModule,
    LecturesModule
  ],
  exports: [CourseComponent]
})
export class CourseModule { }
