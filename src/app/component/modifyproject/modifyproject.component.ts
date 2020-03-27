import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifyproject',
  templateUrl: './modifyproject.component.html',
  styleUrls: ['./modifyproject.component.scss']
})
export class ModifyprojectComponent implements OnInit {

  public projectForm:FormGroup;
  item:any;

  constructor(private dataService:DataService,private router:Router) {
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.projectForm = new FormGroup({
      titre:new FormControl(this.item.titre,Validators.required),
      project_creator:new FormControl(this.item.project_creator,Validators.required),
      territories:new FormControl(this.item.territories,Validators.required),
      logo:new FormControl(this.item.logo),
      status:new FormControl('1')
    })
  }

  submit(){
    this.dataService.modifyProj(this.projectForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['listproject'])
    },err=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}

