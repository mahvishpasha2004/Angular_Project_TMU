import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultShowComponent } from './result-show/result-show.component';
import { ResultmanagementComponent } from './resultmanagement/resultmanagement.component';
import { StudentGuard } from './shared/student.guard';
import { TeacherGuard } from './shared/teacher.guard';



import { SignupComponent } from './signup/signup.component';
import { StudentresultComponent } from './studentresult/studentresult.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent , canActivate:[TeacherGuard]
  },

  {
    path: 'resultmanagement', component: ResultmanagementComponent, canActivate:[TeacherGuard]
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'studentresult', component: StudentresultComponent 
  },
  {
    path: 'resultshow', component: ResultShowComponent , canActivate:[StudentGuard]
  },
  {
    path: '**', component: PageNotFoundComponent  
  }

 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
