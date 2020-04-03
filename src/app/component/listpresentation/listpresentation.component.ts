import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listpresentation',
  templateUrl: './listpresentation.component.html',
  styleUrls: ['./listpresentation.component.scss']
})
export class ListpresentationComponent implements OnInit {

  public presentations:any[] = [];

  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
    this.dataService.getPresList().subscribe(res=>{
      this.presentations = res;
    },err=>console.log(err));
  }

  deletePresentation(id){
    this.dataService.
    deletePres(id).subscribe(res=>{
      console.log(res)
      //if (res === "")
      for(let p of this.presentations){
        if(p.id == id){
          let index = this.presentations.indexOf(p);
          this.presentations.splice(index,1);
          break;
        }
      }
    })
  }
modifyPresentation(item){
    this.router.navigateByUrl('/modifypresentation', { state: item });
  }

}
