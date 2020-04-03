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
  public isLoading:boolean = false;
  public errorMsg: any;
referenceForm:FormGroup=new FormGroup({
   // id:new FormControl('',Validators.required),
     titre:new FormControl('',Validators.required),
   description:new FormControl('',Validators.required),
  
     
   })
 
   constructor(private dataService:DataService,private router:Router) { }
 
  
   submit(){
    this.isLoading = true;
    this.dataService.addReference(this.referenceForm.value).subscribe(res=>{
      console.log(res);
      if(res === "this Reference already exist"){
        this.errorMsg = res;

        this.isLoading = false;
        return;
      }
      this.router.navigate(['list-reference'])
    },err=>{
      console.log(err.statusText);
      this.errorMsg = err.statusText;
      this.isLoading = false;
    })
  }
  getControlValue(name){
  return this.referenceForm.get(name);
}
  ngOnInit(): void {
  }

}
