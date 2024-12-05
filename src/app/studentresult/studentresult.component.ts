import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { ResultviewService } from '../shared/resultview.service';

@Component({
  selector: 'app-studentresult',
  templateUrl: './studentresult.component.html',
  styleUrls: ['./studentresult.component.css']
})
export class StudentresultComponent implements OnInit {
  studentresultsearch!:FormGroup;
  rollnocatcher=0;
  studentresult:any;
  // modelfetcher = false ;
 

  constructor(private formBuilder:FormBuilder,private _http:HttpClient , private router:Router,private api:ApiService,private result : ResultviewService){}

  ngOnInit(): void {
    this.studentresultsearch=this.formBuilder.group({
    Rollno:[''],
    DOB:['']
  })
    
  }
  studentresultform(){
    this._http.get<any>("http://localhost:3000/posts").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Rollno === this.studentresultsearch.value.Rollno && a.DOB ===this.studentresultsearch.value.DOB
      })
      if(user){
        this.rollnocatcher = this.studentresultsearch.value.Rollno
        this._http.get<any>("http://localhost:3000/posts/"+this.rollnocatcher).subscribe(res=>{
          this.studentresult=res;
      
        
      })
        // this.modelfetcher=true;
        this.result.Name=this.studentresult.Name
        this.result.Rollno=this.studentresult.Rollno
        this.result.DOB=this.studentresult.DOB
        this.result.Score=this.studentresult.Score
        alert("Result is here  !!");
        localStorage.setItem('Rollno',this.studentresultsearch.value.Rollno);       
        this.router.navigate(['resultshow'])
        this.studentresultsearch.reset();
      }
      else{
        alert("Please enter correct credential !!")
      }
    },
    err=>{
      alert("Something Went Wrong Server side !!")

    })

  }
  Back()
  {
    localStorage.removeItem('Rollno');
    this.router.navigate(['main'])
    
  }

  


  }


