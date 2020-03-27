import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.scss']
})
export class ListcompanyComponent implements OnInit {

  compList:any[] = []

    constructor(private dataService:DataService,private router:Router) {
      
    }
  
    deleteComp(id){
      this.dataService.deleteComp(id).subscribe(res=>{
        console.log(res)
        for(let p of this.compList){
          if(p.id == id){
            let index = this.compList.indexOf(p);
            this.compList.splice(index,1);
            break;
          }
        }
      })
    }

    editComp(item){
      //console.log("CLICKED")
      this.router.navigateByUrl('/editcompany',{state:item});
    }
  
    ngOnInit(): void {
      this.dataService.getCompList().subscribe(res=>{
        this.compList = res;
      },err=>console.log(err));
    }

}
