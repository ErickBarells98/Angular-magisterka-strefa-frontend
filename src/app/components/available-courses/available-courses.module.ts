import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableCoursesService } from './available-courses.service';
import { AvailableCoursesComponent } from './available-courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AvailableCoursesComponent],
  providers: [AvailableCoursesService],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule
  ],
  exports: [AvailableCoursesComponent]
})
export class AvailableCoursesModule { }
