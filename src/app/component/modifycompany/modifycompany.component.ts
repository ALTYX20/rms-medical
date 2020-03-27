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

  public companyForm:FormGroup;
  item;

  constructor(private dataService:DataService,private router:Router) {
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.companyForm = new FormGroup({
      id:new FormControl(this.item.id),
      name:new FormControl(this.item.name),
      email:new FormControl(this.item.email),
      adresse:new FormControl(this.item.adresse),
      numtel:new FormControl(this.item.numtel),
      website:new FormControl(this.item.website),
      staffcount:new FormControl(this.item.staffcount),
      sector:new FormControl(this.item.sector),
      file:new FormControl(this.item.file),
      activity:new FormControl(this.item.activity),
      description:new FormControl(this.item.description),
      period_subscription:new FormControl(this.item.period_subscription),
      databasesize:new FormControl(this.item.databasesize),
      slatype:new FormControl(this.item.slatype),
      supporttype:new FormControl(this.item.supporttype),
      status:new FormControl(this.item.status)
    })
  }

  submit(){
    this.dataService.modifyComp(this.companyForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['listcompany'])
    },err=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
