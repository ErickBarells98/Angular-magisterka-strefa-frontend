import { Component, OnInit } from '@angular/core';
import { FormLogin } from 'src/app/interfaces/FormLogin';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userSerivce: UserService,private router: Router) { }

  formData: FormLogin = {} as FormLogin;

  ngOnInit(): void {
  }

  submit(){
    this.userSerivce.login(this.formData);
  }

}
