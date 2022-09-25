import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AvailableCoursesComponent } from './components/available-courses/available-courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { LaboratoriesDetailsComponent } from './components/laboratories/laboratories-details/laboratories-details.component';
import { LectureDetailsComponent } from './components/lectures/lecture-details/lecture-details.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course', component: AvailableCoursesComponent},
  {path: 'course/:id', component: CourseComponent},
  {path: 'course/laboratories/:id', component: LaboratoriesDetailsComponent},
  {path: 'course/lectures/:id', component: LectureDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
