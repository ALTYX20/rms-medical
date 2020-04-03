import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss']
})
export class AddcompanyComponent implements OnInit {
  public errorMsg: any;
  public isLoading:boolean = false;

  public companyForm:FormGroup=new FormGroup({
    name:new FormControl('test',Validators.required),
    email:new FormControl('test',Validators.required),
    adresse:new FormControl('test',Validators.required),
    numtel:new FormControl('test',Validators.required),
    website:new FormControl('test',Validators.required),
    staffcount:new FormControl(20,Validators.required),
    sector:new FormControl('test',Validators.required),
    file:new FormControl('test',Validators.required),
    activity:new FormControl('test',Validators.required),
    description:new FormControl('test',Validators.required),
    period_subscription:new FormControl('12',Validators.required),
    databasesize:new FormControl(255,Validators.required),
    slatype:new FormControl('test',Validators.required),
    supporttype:new FormControl('test',Validators.required),
    status:new FormControl('1',Validators.required),
  })

  constructor(private dataService:DataService,private router:Router) { }

  submit(){
    let data = this.companyForm.value;
    let time = Date.now();
    let subperiod = this.MonthToMs(Number(data.period_subscription));
    let date = new Date(time + subperiod);
    data.period_subscription = date.toISOString();
    this.isLoading = true;
    this.dataService.addCompany(this.companyForm.value).subscribe(res=>{
      console.log(res);
      if(res === "company already exist"){
        this.errorMsg = res;
        this.isLoading = false;
        return;
      }
      this.router.navigate(['listcompany'])
    },err=>{
      console.log(err.statusText);
      this.errorMsg = err.statusText;
      this.isLoading = false;
    })
  }

  MonthToMs(month: number) {
    return month * 30 * 24 * 60 * 60 * 1000;
  }

  getControlValue(name){
    return this.companyForm.get(name);
  }

  ngOnInit(): void {
  }

}
