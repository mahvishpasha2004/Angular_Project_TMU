import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultviewService } from '../shared/resultview.service';

@Component({
  selector: 'app-result-show',
  templateUrl: './result-show.component.html',
  styleUrls: ['./result-show.component.css']
})

export class ResultShowComponent {
  constructor(public result:ResultviewService , private route :Router){}

  Home()
  {
    localStorage.removeItem('Rollno');
    this.route.navigate(['main'])
  }
  Back()
  {
    localStorage.removeItem('Rollno');
    this.route.navigate(['studentresult'])
  }

}
