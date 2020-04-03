import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-reference',
  templateUrl: './add-reference.component.html',
  styleUrls: ['./add-reference.component.scss']
})
export class AddReferenceComponent implements OnInit {

referenceForm:FormGroup=new FormGroup({
    id:new FormControl('',Validators.required),
     title:new FormControl('',Validators.required),
   description:new FormControl('',Validators.required),
  
     
   })
 
   constructor(private dataService:DataService,private router:Router) { }
 
   submit(){
     const form = this.referenceForm.value;
     this.dataService.addRef(form).subscribe(res=>{
       console.log(res);
       this.router.navigate(['listreference'])
     })
   }
  ngOnInit(): void {
  }

}
