import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboratoriesComponent } from './laboratories.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileService } from 'src/app/services/file.service';
import { LaboratoriesDetailsComponent } from './laboratories-details/laboratories-details.component';
import { LaboratoriesService } from './laboratories.service';

@NgModule({
  declarations: [LaboratoriesComponent, LaboratoriesDetailsComponent],
  providers: [FileService,LaboratoriesService],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [LaboratoriesComponent]
})
export class LaboratoriesModule { }
