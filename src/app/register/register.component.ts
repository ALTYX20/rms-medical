import { Component, OnInit } from "@angular/core";
import {
  Validators,
  ValidationErrors,
  FormGroup,
  FormControl
} from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { MatStepper } from "@angular/material/stepper";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  isUserLoggedIn = false;
  panelOpenState = true;
  errorMsg: string;
  wrongInput:boolean = false;

  public passwordsNotMatch: boolean;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    motpass: new FormControl("", Validators.required)
  });

  personalInfo: FormGroup;

  nbOfUsers: FormControl = new FormControl("6", Validators.required);

  addUserForm: FormGroup;

  technicalInfo: FormGroup;

  acceptTerms: FormControl = new FormControl(false, Validators.required);

  get quotaExceeded(): boolean {
    let maxUsers = this.nbOfUsers.value;
    let nb =
      this.admins.length +
      this.managers.length +
      this.editors.length +
      this.viewers.length;
    return nb >= maxUsers;
  }

  get staffcount(): number {
    return (
      this.admins.length +
      this.managers.length +
      this.editors.length +
      this.viewers.length
    );
  }

  admins = [
    // {
    //   name: "spencer",
    //   email: "spencer@mail.com",
    //   role: "admins"
    // }
  ];
  managers = [
    // {
    //   name: "spencer",
    //   email: "spencer@mail.com"
    // }
  ];
  editors = [
    // {
    //   name: "spencer",
    //   email: "spencer@mail.com"
    // }
  ];
  viewers = [
    // {
    //   name: "spencer",
    //   email: "spencer@mail.com"
    // }
  ];

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router,
    private location: Location
  ) {
    this.personalInfo = new FormGroup({
      name: new FormControl("tester", [Validators.required,Validators.minLength(5)]),
      email: new FormControl("Company10@mail.com", [
        Validators.required,
        Validators.email
      ]),
      motpass: new FormControl("123456", [Validators.required,Validators.minLength(6)]),
      confpass: new FormControl("123456", Validators.required),
      adresse: new FormControl("company address", Validators.required),
      city: new FormControl("company city", Validators.required),
      codepostal: new FormControl("2021", Validators.required),
      numtel: new FormControl("12345678", Validators.required),
      website: new FormControl("www.company10.com",Validators.required),
      description: new FormControl("Some text", Validators.required),
      activity: new FormControl("produceeer", Validators.required),
      sector: new FormControl("medicine", Validators.required),
      file: new FormControl("something.png", Validators.required)
    },{ validators: this.checkPasswordmatch });

    this.technicalInfo = new FormGroup({
      period_subscription: new FormControl("12", Validators.required),
      databasesize: new FormControl("20", Validators.required),
      slatype: new FormControl("15", Validators.required),
      supporttype: new FormControl("20", Validators.required)
    });

    this.addUserForm = new FormGroup(
      {
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required,Validators.email]),
        role: new FormControl("admins", Validators.required)
      }
    );

  }

  login() {
    const creds = this.loginForm.value;
    if (this.loginForm.valid) {
      console.log(creds);
      this.authService.login(creds).subscribe(res => {
        if (res) this.router.navigate([""]);
      });
    } else {
      this.errorMsg = "Please verify your input.";
    }
  }

  dismissAlert() {
    this.errorMsg = null;
    this.wrongInput = false;
  }

  addUser() {
    console.log(this.staffcount);
    if(this.addUserForm.valid){
      if (!this.quotaExceeded) {
        let formValue = this.addUserForm.value;
        let users = [...this.admins,...this.managers,...this.editors,...this.viewers];
        console.log(formValue);
        this[formValue.role].push(formValue);
        this.wrongInput = false
      }
    }else{
      this.wrongInput = true
    }
  }

  removeUser(u){
    console.log(u)
    let role = u.role;
    let index = this[role].indexOf(u);
    this[role].splice(this[role].indexOf(u),1);
    // let users = [...this.admins,...this.managers,...this.editors,...this.viewers];
    // console.log(u)
    // console.log(users)
    // users.splice(users.indexOf(u),1);
  }

  submitPersonalInfo(stepper:MatStepper){
    console.log("submitPersonalInfo")
    this.admins.push({
      name: this.getControlValue('name').value,
      email: this.getControlValue('email').value,
      role: 'admins'
    })
    stepper.next()
  }

  submitAll() {
    let employee = [this.admins, this.managers, this.editors, this.viewers];
    let data = {
      ...this.personalInfo.value,
      ...this.technicalInfo.value,
      staffcount: this.nbOfUsers.value,
      status: true,
      employee
    };
    let time = Date.now();
    let subperiod = this.MonthToMs(Number(data.period_subscription));
    let date = new Date(time + subperiod);
    data.period_subscription = date.toISOString();
    console.log(Object.keys(data).length);
    console.log(data);
    this.dataService.addCompany(data).subscribe(res => {
      console.log(res);
      if (res == "company already exist") {
        alert(res);
        return;
      }
      this.router.navigate([""]);
    });
  }

  MonthToMs(month: number) {
    return month * 30 * 24 * 60 * 60 * 1000;
  }

  checkPasswordmatch(control: FormGroup): null | ValidationErrors {
    const pass = control.get("motpass");
    const conf = control.get("confpass");
    return pass && conf && pass.value === conf.value
      ? null
      : { passwordsNotMatch: true };
  }

  getControlValue(id){
    return this.personalInfo.get(id);
  }

  test(){
    console.log(this.personalInfo.valid)
  }

  ngOnInit(): void {
    this.authService.getError().subscribe(res => {
      this.errorMsg = res;
    });
  }
}
