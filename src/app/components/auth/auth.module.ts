import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AuthModule { }
