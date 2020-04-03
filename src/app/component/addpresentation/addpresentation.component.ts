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

  presentationForm:FormGroup=new FormGroup({
    id:new FormControl('',Validators.required),
     title:new FormControl('',Validators.required),
    territoires:new FormControl('',Validators.required),
    presentation_creator_id:new FormControl('',Validators.required),
     
   })

  constructor(private dataService:DataService,private router:Router) { }

  submit(){
    const form = this.presentationForm.value;
    this.dataService.addPresentation(form).subscribe(res=>{
      console.log(res);
      this.router.navigate(['listPresentation'])
    })
  }

  ngOnInit(): void {
  }

}
