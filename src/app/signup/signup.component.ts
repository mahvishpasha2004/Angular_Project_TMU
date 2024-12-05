import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup
  constructor(private formBuilder:FormBuilder , private _http:HttpClient,private router:Router){ }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      Name:['',[Validators.required , Validators.minLength(5)]],
      Email:['',[Validators.required,Validators.pattern( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      Mobileno:['',[Validators.required , Validators.minLength(10),Validators.maxLength(10)]],
      Password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })
    
    
  }

  //Make Method to Create User:-
  signUp(){
    this._http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
      alert("Signup Successfully !!")
      this.signupForm.reset();
      this.router.navigate(['login'])
    },
    err=>{
      alert("Something Went Wrong !!")
    })
  }


}
