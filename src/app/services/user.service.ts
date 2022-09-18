import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormRegister } from '../interfaces/FormRegister';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp: HttpClient) { }

  register(newUser: FormRegister){
    console.log(newUser);
  }

}
