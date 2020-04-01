import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-media',
  templateUrl: './modify-media.component.html',
  styleUrls: ['./modify-media.component.scss']
})
export class ModifyMediaComponent implements OnInit {
  public ImageForm:FormGroup;
  public videoForm:FormGroup;
  public pdfForm:FormGroup;
  item:any;
  constructor(private dataService:DataserviceService,private router:Router) { 
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
    this.dataService.modifyMedia(this.ImageForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list-media'])
    },err=>{
      console.log(err);
    })
    this.dataService.modifyMedia(this.videoForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list-media'])
    },err=>{
      console.log(err);
    })
    this.dataService.modifyMedia(this.pdfForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list-media'])
    },err=>{
      console.log(err);
    })
  }
  ngOnInit(): void {
  }

}
