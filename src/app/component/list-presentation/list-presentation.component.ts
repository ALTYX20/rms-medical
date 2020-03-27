import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.scss']
})
export class ListPresentationComponent implements OnInit {

 
  presentations:any[];

  constructor(private dataService:DataserviceService,private route: ActivatedRoute, private router: Router,private formBuilder:FormBuilder) { }



    ngOnInit(): void {
      this.dataService.getPResenatationDetails().subscribe(res=>{
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
      this.router.navigateByUrl('/modifyPresentation', { state: item });
    }

}
