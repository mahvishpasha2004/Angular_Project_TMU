import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})             
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private _http:HttpClient , private router:Router){}

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
    Email:['',[Validators.required,Validators.email]],
    Password:['',Validators.required]
  })
    
  }
  logIn(){
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Email === this.loginForm.value.Email && a.Password ===this.loginForm.value.Password
      })
      if(user){
        alert("Login is Successfull !!");
        localStorage.setItem('Email',this.loginForm.value.Email);
        this.loginForm.reset();
        this.router.navigate(['resultmanagement'])
      }
      else{
        alert("Login failed please enter correct credential !!")
      }
    },
    err=>{
      alert("Something Went Wrong Server side !!")

    })

  }
  Home()
  {
    this.router.navigate(['main']);
  }

}
