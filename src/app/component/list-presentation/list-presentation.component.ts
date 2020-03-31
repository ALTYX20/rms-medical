import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataserviceService} from 'src/app/services/dataservice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.scss']
})
export class ListPresentationComponent implements OnInit {

 
  presentations:any[];

  constructor(private dataService:DataserviceService,private route: ActivatedRoute, private router: Router) { }



    ngOnInit(): void {
      this.dataService.getPresenatationDetails().subscribe(res=>{
        this.presentations = res;
      },err=>console.log(err));
    }


 

    
  deletePresentation(id){
      this.dataService.
      deletePresentation(id).subscribe(res=>{
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
      this.router.navigateByUrl('/modify-Presentation', { state: item });
    }

}
