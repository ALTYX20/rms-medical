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

  public productForm:FormGroup=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    adresse:new FormControl(''),
    numtel:new FormControl(''),
    website:new FormControl(''),
    staffcount:new FormControl(''),
    sector:new FormControl(''),
    file:new FormControl(''),
    activity:new FormControl(''),
    description:new FormControl(''),
    period_subscription:new FormControl(''),
    databasesize:new FormControl(''),
    slatype:new FormControl(''),
    supporttype:new FormControl(''),
    status:new FormControl(''),
  })

  constructor(private dataService:DataService,private router:Router) { }

  submit(){
    const form = this.productForm.value;
    this.dataService.addCompany(form).subscribe(res=>{
      console.log(res);
      this.router.navigate(['listcompany'])
    })
  }

  ngOnInit(): void {
  }

}
