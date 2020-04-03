import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listpresentation',
  templateUrl: './listpresentation.component.html',
  styleUrls: ['./listpresentation.component.scss']
})
export class ListpresentationComponent implements OnInit {
  presentations:any[];

  constructor(private dataService:DataService,private route: ActivatedRoute, private router: Router) { }



    ngOnInit(): void {
      this.dataService. getPresenatationDetails().subscribe(res=>{
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
      this.router.navigateByUrl('/modify-presentation', { state: item });
    }

}