import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LecturesComponent } from './lectures.component';
import { FileService } from 'src/app/services/file.service';
import { LectureDetailsComponent } from './lecture-details/lecture-details.component';

@NgModule({
  declarations: [LecturesComponent, LectureDetailsComponent],
  providers: [FileService],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [LecturesComponent]
})
export class LecturesModule { }
