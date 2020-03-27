import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.scss']
})
export class ListprojectComponent implements OnInit {

  projList:any[] = []

  constructor(private dataService:DataService,private router:Router) {
  }

  deleteProj(id){
    this.dataService.deleteProj(id).subscribe(res=>{
      console.log(res)
      //if (res === "")
      for(let p of this.projList){
        if(p.id == id){
          let index = this.projList.indexOf(p);
          this.projList.splice(index,1);
          break;
        }
      }
    })
  }

  editProj(item){
    this.router.navigateByUrl('/editproject', { state: item });
  }

  ngOnInit(): void {
    this.dataService.getProjList().subscribe(res=>{
      this.projList = res;
    },err=>console.log(err));
  }

}
