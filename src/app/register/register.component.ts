import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { MatStepper } from "@angular/material/stepper";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  isUserLoggedIn = false;
  panelOpenState = true;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.email),
    motpass: new FormControl("", Validators.required)
  });

  personalInfo: FormGroup = new FormGroup({
    name: new FormControl("Company10", Validators.required),
    email: new FormControl("Company10@mail.com", Validators.required),
    address: new FormControl("company address", Validators.required),
    numtel: new FormControl("12345678", Validators.required),
    website: new FormControl("www.company10.com"),
    description: new FormControl("Some text", Validators.required),
    activity: new FormControl("produceeer", Validators.required),
    sector: new FormControl("medicine", Validators.required)
  });

  nbOfUsers: FormControl = new FormControl("6", Validators.required);

  addUserForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    role: new FormControl("admin", Validators.required)
  });

  technicalInfo: FormGroup = new FormGroup({
    period_subscription: new FormControl("12", Validators.required),
    databasesize: new FormControl("20", Validators.required),
    slatype: new FormControl("15", Validators.required),
    supporttype: new FormControl("20", Validators.required),
  });

  acceptTerms: FormControl = new FormControl(false, Validators.required);

  public productForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    adresse: new FormControl(""),
    numtel: new FormControl(""),
    website: new FormControl(""),
    staffcount: new FormControl(""),
    sector: new FormControl(""),
    file: new FormControl(""),
    activity: new FormControl(""),
    description: new FormControl(""),
    period_subscription: new FormControl(""),
    databasesize: new FormControl(""),
    slatype: new FormControl(""),
    supporttype: new FormControl(""),
    status: new FormControl("")
  });

  get quotaExceeded():boolean{
    let maxUsers = this.nbOfUsers.value;
    let nb = this.admin.length + this.manager.length + this.editor.length + this.viewer.length;
    return (nb >= maxUsers)
  }

  get staffcount():number{
    return this.admin.length + this.manager.length + this.editor.length + this.viewer.length;
  }

  admin = [
    {
      name: "spencer",
      email: "spencer@mail.com"
    }
  ];
  manager = [
    {
      name: "spencer",
      email: "spencer@mail.com"
    }
  ];
  editor = [
    {
      name: "spencer",
      email: "spencer@mail.com"
    }
  ];
  viewer = [
    {
      name: "spencer",
      email: "spencer@mail.com"
    }
  ];

  constructor(private authService: AuthService,private router:Router,private location:Location) {}

  ngOnInit(): void {
    if (this.authService.currentUserValue) this.isUserLoggedIn = true;
  }

  login(stepper: MatStepper) {
    const creds = this.loginForm.value;
    if (creds.email != "" && creds.motpass != "") {
      console.log(creds);
      this.authService.login(creds).subscribe(res => {
        if (res) stepper.next();
      });
    }
  }

  addUser() {
    console.log(this.staffcount)
    if (!this.quotaExceeded) {
      let formValue = this.addUserForm.value;
      console.log(formValue);
      this[formValue.role].push(formValue);
    }
  }

  submitAll(){
    let data = {id:10,...this.personalInfo.value,...this.technicalInfo.value,staffcount:this.nbOfUsers.value,status:true}
    let time = Date.now()
    let subperiod = this.MonthToMs(Number(data.period_subscription))
    let date = new Date(time+subperiod)
    data.period_subscription = date.toISOString();
    // console.log(Object.keys(data).length)
    // console.log(data);
    this.router.navigate(['']);
  }

  MonthToMs(month:number){
    return month*30*24*60*60*1000
  }
}
