import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modifymedia',
  templateUrl: './modifymedia.component.html',
  styleUrls: ['./modifymedia.component.scss']
})
export class ModifymediaComponent implements OnInit {
  
  public errorMsg: any;
  public isLoading:boolean = false;
  public mediaForm:FormGroup;
 
  item:any;
  constructor(private dataService:DataService,private router:Router,private cd:ChangeDetectorRef) { 
    this.item = this.router.getCurrentNavigation().extras.state;
    console.log(this.item)
    this.mediaForm = new FormGroup({
      titre:new FormControl(this.item.titre,Validators.required),
      description:new FormControl(this.item.description,Validators.required),
      lien:new FormControl(this.item.lien,Validators.required),
      type:new FormControl(this.item.type,Validators.required),

    })
    
  }
  submit(){
    this.isLoading = true;
    this.dataService.modifyPresentation(this.mediaForm.value).subscribe(res=>{
      console.log(res);
      if(res === "this media already exist"){
        this.errorMsg = res;
        this.isLoading = false;
        return;
      }
      this.router.navigate(['list-media'])
    },err=>{
      console.log(err.statusText);
      this.errorMsg = err.statusText;
      this.isLoading = false;
    })
  }
  onFileChange(event){
    let reader = new FileReader();
    const [file]  = event.target.files;
    reader.onload = () => {
      this.mediaForm.patchValue({
        file: reader.result
      });
     
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    }
  }
  getControlValue(name){
    return this.mediaForm.get(name);
  }
  ngOnInit(): void {
  }

}

