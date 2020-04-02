import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {
  public isLoading:boolean = false;

 
  public MediaForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })
  /*
  public VideoForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })
  public pdfForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })*/



  constructor(private dataService:DataService,private cd:ChangeDetectorRef,private router:Router) { }
  ngOnInit(): void {
  
  }
  submit(){
    this.isLoading = true;
    this.dataService.addMedia(this.MediaForm.value).subscribe(res=>{
      console.log(res);
      if(res === "this media already exist"){
        this.isLoading = false;
        return;
      }
      this.router.navigate(['list-Media'])
    },err=>{
      console.log(err.statusText);
      
      this.isLoading = false;
    })
   
  }
  onFileChange(event){
    let reader = new FileReader();
    const [file]  = event.target.files;
    reader.onload = () => {
      this.MediaForm.patchValue({
        file: reader.result
      });
     
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    }
  }

 


}
