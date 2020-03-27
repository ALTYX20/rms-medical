import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListproductComponent implements OnInit {

  prodList:any[] = []

  constructor(private dataService:DataService,private router:Router) {
    
  }

  deleteProd(id){
    this.dataService.deleteProd(id).subscribe(res=>{
      console.log(res)
      for(let p of this.prodList){
        if(p.id == id){
          let index = this.prodList.indexOf(p);
          this.prodList.splice(index,1);
          break;
        }
      }
    })
  }

  editProd(item){
    this.router.navigateByUrl('/editproduct', { state: item });
  }

  ngOnInit(): void {
    this.dataService.getProdList().subscribe(res=>{
      this.prodList = res;
    },err=>console.log(err));
  }

}
