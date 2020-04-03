import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addpresentation',
  templateUrl: './addpresentation.component.html',
  styleUrls: ['./addpresentation.component.scss']
})
export class AddpresentationComponent implements OnInit {

  public isLoading:boolean = false;
  public errorMsg: any;

 presentationForm:FormGroup=new FormGroup({
   id:new FormControl('',Validators.required),
    titre:new FormControl('',Validators.required),
    presentation_creator:new FormControl('',Validators.required),

   
    
  })


  constructor(private dataService:DataService,private router:Router,private formBuilder:FormBuilder) { }

  submit(){
    this.isLoading = true;
    this.dataService.addPresentation(this.presentationForm.value).subscribe(res=>{
      console.log(res);
      if(res === "this presentation already exist"){
        this.errorMsg = res;

        this.isLoading = false;
        return;
      }
      this.router.navigate(['list-presentation'])
    },err=>{
      console.log(err.statusText);
      this.errorMsg = err.statusText;
      this.isLoading = false;
    })
  }
  getControlValue(name){
    return this.presentationForm.get(name);
  }
  ngOnInit(): void {
    
    
}}
