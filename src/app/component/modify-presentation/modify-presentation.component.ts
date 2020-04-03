import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modify-presentation',
  templateUrl: './modify-presentation.component.html',
  styleUrls: ['./modify-presentation.component.scss']
})
export class ModifyPresentationComponent implements OnInit {

   presentationForm:FormGroup;
  item:any;

  constructor(private dataService:DataService,private router:Router) {
    
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.presentationForm = new FormGroup({
      title:new FormControl(this.item.title,Validators.required),
      territories:new FormControl(this.item.territories,Validators.required),
      logo:new FormControl(this.item.logo),
      status:new FormControl('1')
    })
  }

  submit(){
    this.dataService.modifyPres(this.presentationForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['listpresentation'])
    },err=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
