import { Component, OnInit } from '@angular/core';
import { FormLogin } from 'src/app/interfaces/FormLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  formData: FormLogin = {} as FormLogin;

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formData);
  }

}
