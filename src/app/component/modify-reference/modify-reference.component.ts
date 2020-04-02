import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
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

  public errorMsg: any;
  public isLoading:boolean = false;

  constructor(private dataService:DataService,private router:Router) {
    
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.referenceForm = new FormGroup({
      titre:new FormControl(this.item.titre,Validators.required),
     description:new FormControl(this.item.description,Validators.required),
      
    
    })
  }

  submit(){
    this.isLoading = true;
    this.dataService.modifyReference(this.referenceForm.value).subscribe(res=>{
      console.log(res);
      if(res === "this reference already exist"){
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
