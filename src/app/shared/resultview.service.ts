import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultviewService {
  public Name: String = '';
  public Rollno: number = 0;
  public DOB: string = '';
  public Score: number = 0;

  constructor() { }
}
