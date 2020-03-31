import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reference',
  templateUrl: './add-reference.component.html',
  styleUrls: ['./add-reference.component.scss']
})
export class AddReferenceComponent implements OnInit {

  public referenceForm:FormGroup=new FormGroup({
    id:new FormControl(''),
     title:new FormControl(''),
   description:new FormControl(''),
  
     
   })
 
   constructor(private dataService:DataserviceService,private router:Router) { }
 
   submit(){
     const form = this.referenceForm.value;
     this.dataService.addReference(form).subscribe(res=>{
       console.log(res);
       this.router.navigate(['list-reference'])
     })
   }
  ngOnInit(): void {
  }

}
