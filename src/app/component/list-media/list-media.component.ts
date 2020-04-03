import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
 
  images:any[] = []
  videos:any[] = []
  pdf:any[] = []
  public ImageForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })
  public VideoForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })
  public pdfForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })
  constructor(private dataService:DataService,private router:Router,cd:ChangeDetectorRef) {}


  ngOnInit(): void {
    this.dataService.getMedList().subscribe(res=>{
      this.images = res;
    },err=>console.log(err));
    this.dataService.getMedList().subscribe(res=>{
      this.videos = res;
    },err=>console.log(err));
  
    this.dataService.getMedList().subscribe(res=>{
      this.pdf = res;
    },err=>console.log(err));
  
  }

  deleteMedia(id){
    this.dataService.deleteMed(id).subscribe(res=>{
      console.log(res)
      //if (res === "")
      for(let i of this.images){
        if(i.id == id){
          let index = this.images.indexOf(i);
          this.images.splice(index,1);
          break;
        }
      }
    })
    this.dataService.deleteMed(id).subscribe(res=>{
      console.log(res)
      //if (res === "")
      for(let v of this.videos){
        if(v.id == id){
          let index = this.images.indexOf(v);
          this.videos.splice(index,1);
          break;
        }
      }
    })
    this.dataService.deleteMed(id).subscribe(res=>{
      console.log(res)
      //if (res === "")
      for(let f of this.pdf){
        if(f.id == id){
          let index = this.pdf.indexOf(f);
          this.pdf.splice(index,1);
          break;
        }
      }
    })
  }
  
  modifyMedia(item){
    
    this.router.navigateByUrl('/modifymedia', { state: item });
  }
 
}
