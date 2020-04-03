import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modify-reference',
  templateUrl: './modify-reference.component.html',
  styleUrls: ['./modify-reference.component.scss']
})
export class ModifyReferenceComponent implements OnInit {

  referenceForm:FormGroup;
  item:any;

  constructor(private dataService:DataService,private router:Router) {
    
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.referenceForm = new FormGroup({
      title:new FormControl(this.item.title,Validators.required),
     description:new FormControl(this.item.description,Validators.required),
      
    
    })
  }

  submit(){
    this.dataService.modifyRef(this.referenceForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['listReference'])
    },err=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
