import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  IsLoggedIN(){
    return !!localStorage.getItem('Email');
  }

  IsValidStudent(){
    return !!localStorage.getItem('Rollno');
  }
}
