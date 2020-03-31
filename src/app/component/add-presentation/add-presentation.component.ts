import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-presentation',
  templateUrl: './add-presentation.component.html',
  styleUrls: ['./add-presentation.component.scss']
})
export class AddPresentationComponent implements OnInit {

 presentationForm:FormGroup=new FormGroup({
    title:new FormControl('',Validators.required),
   territoires:new FormControl('',Validators.required),
   presentation_creator_id:new FormControl('',Validators.required),
    
  })

  constructor(private dataService:DataserviceService,private router:Router) { }

  submit(){
    const form = this.presentationForm.value;
    this.dataService.addPresentation(form).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list-Presentation'])
    })
  }

  ngOnInit(): void {
    
    
}}
