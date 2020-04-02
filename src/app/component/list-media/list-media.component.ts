import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
 
  images:any[] = []
  videos:any[] = []
  pdf:any[] = []
  medias:any[] = []
  public ImageForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })

  constructor(private dataService:DataService,private router:Router,cd:ChangeDetectorRef) {}


  ngOnInit(): void {
    this.dataService.getMediaDetails().subscribe(res=>{
      this.images = res;
    },err=>console.log(err));
    this.dataService.getMediaDetails().subscribe(res=>{
      this.videos = res;
    },err=>console.log(err));
  
    this.dataService.getMediaDetails().subscribe(res=>{
      this.pdf = res;
    },err=>console.log(err));
  
  }

  deleteMedia(id){
    this.dataService.deleteMedia(id).subscribe(res=>{
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
  } 
  
  modifyMedia(item){
    
    this.router.navigateByUrl('/modify-media', { state: item });
  }
 
}
