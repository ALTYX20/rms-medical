import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifyproduct',
  templateUrl: './modifyproduct.component.html',
  styleUrls: ['./modifyproduct.component.scss']
})
export class ModifyproductComponent implements OnInit {

  public productForm:FormGroup;
  item:any;
  public errorMsg: any;
  public isLoading:boolean = false;

  constructor(private dataService:DataService,private router:Router) {
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.productForm = new FormGroup({
      nom:new FormControl(this.item.nom,Validators.required),
      logo:new FormControl(this.item.logo),
      type:new FormControl(this.item.type,Validators.required),
      prix:new FormControl(this.item.prix,Validators.required),
      description:new FormControl(this.item.description,Validators.required),
      project:new FormControl('1')
    })
  }

  submit(){
    this.isLoading = true;
    this.dataService.modifyProd(this.productForm.value).subscribe(res=>{
      console.log(res);
      if(res === "this product already exist"){
        this.errorMsg = res;
        this.isLoading = false;
        return;
      }
      this.router.navigate(['listproduct'])
    },err=>{
      console.log(err.statusText);
      this.errorMsg = err.statusText;
      this.isLoading = false;
    })
  }

  getControlValue(name){
    return this.productForm.get(name);
  }

  ngOnInit(): void {
  }

}
