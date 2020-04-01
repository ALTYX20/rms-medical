import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-reference',
  templateUrl: './modify-reference.component.html',
  styleUrls: ['./modify-reference.component.scss']
})
export class ModifyReferenceComponent implements OnInit {

  referenceForm:FormGroup;
  item:any;

  constructor(private dataService:DataserviceService,private router:Router) {
    
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.referenceForm = new FormGroup({
      title:new FormControl(this.item.title,Validators.required),
     description:new FormControl(this.item.description,Validators.required),
      
    
    })
  }

  submit(){
    this.dataService.modifyReference(this.referenceForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list-Reference'])
    },err=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
