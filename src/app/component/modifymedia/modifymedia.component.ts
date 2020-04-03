import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modifymedia',
  templateUrl: './modifymedia.component.html',
  styleUrls: ['./modifymedia.component.scss']
})
export class ModifymediaComponent implements OnInit {
  
  public ImageForm:FormGroup;
  public videoForm:FormGroup;
  public pdfForm:FormGroup;
  item:any;
  constructor(private dataService:DataService,private router:Router) { 
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.ImageForm = new FormGroup({
      type:new FormControl(this.item.titre,Validators.required),
      description:new FormControl(this.item.description,Validators.required),
      
    })
    this.videoForm = new FormGroup({
      type:new FormControl(this.item.titre,Validators.required),
      description:new FormControl(this.item.description,Validators.required),
      
    })
    this.pdfForm = new FormGroup({
      type:new FormControl(this.item.titre,Validators.required),
      description:new FormControl(this.item.description,Validators.required),
      
    })
  }
  submit(){
    this.dataService.modifyMed(this.ImageForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list-media'])
    },err=>{
      console.log(err);
    })
    this.dataService.modifyMed(this.videoForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list-media'])
    },err=>{
      console.log(err);
    })
    this.dataService.modifyMed(this.pdfForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list-media'])
    },err=>{
      console.log(err);
    })
  }
  ngOnInit(): void {
  }

}
