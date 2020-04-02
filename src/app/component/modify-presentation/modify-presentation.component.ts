import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-presentation',
  templateUrl: './modify-presentation.component.html',
  styleUrls: ['./modify-presentation.component.scss']
})
export class ModifyPresentationComponent implements OnInit {

   presentationForm:FormGroup;
   item:any;
   public errorMsg: any;

   public isLoading:boolean = false;

  constructor(private dataService:DataService,private router:Router) {
    
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.presentationForm = new FormGroup({
      id:new FormControl(this.item.id,Validators.required),

      titre:new FormControl(this.item.titre,Validators.required),
      territories:new FormControl(this.item.territories,Validators.required),
      project:new FormControl(this.item.territories,Validators.required),
     media:new FormControl(this.item.territories,Validators.required),

    })
  }

  submit(){
    this.isLoading = true;
    this.dataService.modifyPresentation(this.presentationForm.value).subscribe(res=>{
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
  }

}
