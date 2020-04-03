import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifycompany',
  templateUrl: './modifycompany.component.html',
  styleUrls: ['./modifycompany.component.scss']
})
export class ModifycompanyComponent implements OnInit {
  public errorMsg: any;
  public isLoading:boolean = false;
  public companyForm:FormGroup;
  item;

  constructor(private dataService:DataService,private router:Router) {
    this.item = this.router.getCurrentNavigation().extras.state;
    if(!this.item) this.router.navigate(['listcompany'])
    console.log(this.item)
    this.companyForm = new FormGroup({
      name:new FormControl(this.item.name,Validators.required),
      email:new FormControl(this.item.email,Validators.required),
      adresse:new FormControl(this.item.adresse,Validators.required),
      numtel:new FormControl(this.item.numtel,Validators.required),
      website:new FormControl(this.item.website,Validators.required),
      staffcount:new FormControl(this.item.staffcount,Validators.required),
      sector:new FormControl(this.item.sector,Validators.required),
      file:new FormControl(this.item.file,Validators.required),
      activity:new FormControl(this.item.activity,Validators.required),
      description:new FormControl(this.item.description,Validators.required),
      period_subscription:new FormControl(this.item.period_subscription,Validators.required),
      databasesize:new FormControl(this.item.databasesize,Validators.required),
      slatype:new FormControl(this.item.slatype,Validators.required),
      supporttype:new FormControl(this.item.supporttype,Validators.required),
      status:new FormControl(this.item.status,Validators.required),
    })
  }

  submit(){
    let data = this.companyForm.value;
    let time = Date.now();
    let subperiod = this.MonthToMs(Number(data.period_subscription));
    let date = new Date(time + subperiod);
    data.period_subscription = date.toISOString();
    this.isLoading = true;
    this.dataService.modifyComp(this.companyForm.value).subscribe(res=>{
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
