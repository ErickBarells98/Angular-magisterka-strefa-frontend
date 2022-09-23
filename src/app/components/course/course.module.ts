import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [CourseComponent],
  providers: [CourseService],
  imports: [
    CommonModule
  ],
  exports: [CourseComponent]
})
export class CourseModule { }
