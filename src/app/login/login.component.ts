import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    email:new FormControl('',Validators.email),
    motpass:new FormControl('',Validators.required)
  })
  errorMsg: any;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if (this.authService.currentUserValue) this.router.navigate(['']);
    this.authService.getError().subscribe(res=>{
      this.errorMsg = res;
    })
  }

  login(){
    const creds = this.loginForm.value;
    if(creds.email != "" && creds.motpass != ""){
      console.log(creds)
      this.authService.login(creds).subscribe(res=>{
        if(res) this.router.navigate(['']);
      })
    }
  }

}
