import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-reference',
  templateUrl: './list-reference.component.html',
  styleUrls: ['./list-reference.component.scss']
})
export class ListReferenceComponent implements OnInit {

  references:any[] = [];

  constructor(private dataService:DataService,private route: ActivatedRoute, private router: Router) { }



    ngOnInit(): void {
      this.dataService.getRefList().subscribe(res=>{
        this.references = res;
      },err=>console.log(err));
    }


 

    deleteReference(id){
      this.dataService.deleteRef(id).subscribe(res=>{
        console.log(res)
        //if (res === "")
        for(let p of this.references){
          if(p.id == id){
            let index = this.references.indexOf(p);
            this.references.splice(index,1);
            break;
          }
        }
      })
    }

  modifyReference(item){
      this.router.navigateByUrl('/modifyreference', { state: item });
    }
  }



