import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
 
  images:any[] = []
  videos:any[] = []
  pdf:any[] = []

  constructor(private dataService:DataserviceService,private router:Router) {}


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
    this.dataService.deleteMedia(id).subscribe(res=>{
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
    this.dataService.deleteMedia(id).subscribe(res=>{
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
    this.router.navigateByUrl('/modify-media', { state: item });
  }

}
