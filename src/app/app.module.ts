import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { StudentresultComponent } from './studentresult/studentresult.component';
import {MatIconModule} from '@angular/material/Icon';
import { ResultShowComponent } from './result-show/result-show.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ResultmanagementComponent } from './resultmanagement/resultmanagement.component';




@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    SignupComponent,
    MainComponent,
    StudentresultComponent,
    ResultShowComponent,
    PageNotFoundComponent,
    ResultmanagementComponent,
  
  
   
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
