import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from './components/auth/auth.module';
import { JwtInterceptor } from './utils/interceptors/jwt.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { AvailableCoursesModule } from './components/available-courses/available-courses.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    AvailableCoursesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
