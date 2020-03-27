import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isUserLoggedIn = false;

  loginForm:FormGroup=new FormGroup({
    email:new FormControl('',Validators.email),
    motpass:new FormControl('',Validators.required)
  })

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue) this.isUserLoggedIn = true;
  }

  login(stepper:MatStepper){
    const creds = this.loginForm.value;
    if(creds.email != "" && creds.motpass != ""){
      console.log(creds)
      this.authService.login(creds).subscribe(res=>{
        if(res) stepper.next();
      })
    }
  }

}
