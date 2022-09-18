import { Component, OnInit } from '@angular/core';
import { FormRegister } from 'src/app/interfaces/FormRegister';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  formData: FormRegister = {
      email: '',
      name: '',
      surname: '',
      password: '',
      confirmPassword: '',
      studiesType: '0',
      studiesLvl: '0',
      semestr: '1',
      fieldOfStudy: '1'
  } as FormRegister;

  semestrNumbers:Array<number> = [1,2,3,4,5,6,7];

  ngOnInit(): void {
  }

  onChange(studiesLvl: string){
    studiesLvl === '1' ? this.semestrNumbers = [1,2,3] : this.semestrNumbers = [1,2,3,4,5,6,7];
    this.formData.semestr = '1';
  }

  submit(){
    if(this.formData.password.match(this.formData.confirmPassword)){
      this.userService.register(this.formData);
    }
    else{
      alert('Wrong data!');
    }
  }
}
