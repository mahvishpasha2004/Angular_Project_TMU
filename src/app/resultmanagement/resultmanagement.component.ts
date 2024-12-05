import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { StudentData } from './student.model';

@Component({
  selector: 'app-resultmanagement',
  templateUrl: './resultmanagement.component.html',
  styleUrls: ['./resultmanagement.component.css']
})
export class ResultmanagementComponent implements OnInit {

  formValue!: FormGroup
  studentModelObj : StudentData = new StudentData;
  allStudentData:any;
  showAdd!:boolean
  showbtn!:boolean;
  


  constructor(private formBuilder: FormBuilder , private api:ApiService,private route : Router) { }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id:[''],
      Name: ['',[Validators.required , Validators.minLength(5)]],
      Rollno: ['',Validators.required],
      DOB: ['',Validators.required],
      Score: ['',[Validators.required,Validators.max(500)]],

    })
    this.getAllData()

  }
  ClickAddStudent(){
    this.formValue.reset();
    
    this.showAdd=true;
    this.showbtn=false;
  }

  //Now Subscribing Our Data:-
  addStudent(){
  
    this.studentModelObj.id = this.formValue.value.Rollno;
    this.studentModelObj.Name = this.formValue.value.Name;
    this.studentModelObj.Rollno = this.formValue.value.Rollno;
    this.studentModelObj.DOB = this.formValue.value.DOB;
    this.studentModelObj.Score = this.formValue.value.Score;

    this.api.postStudent(this.studentModelObj).subscribe(res=>{
      console.log(res);
      alert("Student Record Added Successfully ! ");
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset()
      this.getAllData();//instace updation
    },
    err=>{
      alert("Please check and enter again!! ")
    }
    )
  }
  //Get All Data:-
  getAllData(){
    this.api.getStudent().subscribe(res=>{
      this.allStudentData=res;
    })
  }

  //Deleting the Method:-
  deleteStud(data:any){
    this.api.deleteStudent(data.id).subscribe(res=>{
      alert("Student Record Deleted Successfully !!")
      this.getAllData(); // instace delete without refreshing
    })
  }

  //onEdit Method:-
  onEditStudent(data:any){
    this.showAdd=false;
    this.showbtn=true;
    this.studentModelObj.id = data.id
    this.formValue.controls['id'].setValue(data.Rollno);
    this.formValue.controls['Name'].setValue(data.Name);
    this.formValue.controls['Rollno'].setValue(data.Rollno);
    this.formValue.controls['DOB'].setValue(data.DOB);
    this.formValue.controls['Score'].setValue(data.Score);
  }
  updateStudent(){

    this.studentModelObj.id = this.formValue.value.Rollno;
    this.studentModelObj.Name = this.formValue.value.Name , Validators.minLength(5)
    this.studentModelObj.Rollno = this.formValue.value.Rollno;
    this.studentModelObj.DOB = this.formValue.value.DOB;
    this.studentModelObj.Score = this.formValue.value.Score;

    this.api.updateStudent(this.studentModelObj,this.studentModelObj.id).subscribe(res=>{
      alert("Student Record Updated Successfully !!");
      
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset()
      this.getAllData();//instace updation
    })
  }
  fullData(data:any){
    this.api.getStudent().subscribe(res=>{
      this.allStudentData=res;
    })
  }
  logout(){
    localStorage.removeItem('Email');
    this.route.navigate(['login'])
  }

 
}
{

}
