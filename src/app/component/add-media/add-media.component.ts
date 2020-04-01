import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {
 
  public ImageForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })
  public videoForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })
  public pdfForm:FormGroup=new FormGroup({
    type:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
 
  })



  constructor(private dataService:DataserviceService,private cd:ChangeDetectorRef) { }
  ngOnInit(): void {
  
  }
  submit(){
    this.dataService.addMedia(this.ImageForm.value).subscribe(res=>{
      //
    },err=>{
      console.log(err);
    })
    this.dataService.addMedia(this.videoForm.value).subscribe(res=>{
      //
    },err=>{
      console.log(err);
    })
    this.dataService.addMedia(this.pdfForm.value).subscribe(res=>{
      //
    },err=>{
      console.log(err);
    })
  }
  onFileChange(event){
    let reader = new FileReader();
    const [file]  = event.target.files;
    reader.onload = () => {
      this.ImageForm.patchValue({
        file: reader.result
      });
      this.videoForm.patchValue({
        file: reader.result
      });
      this.pdfForm.patchValue({
        file: reader.result
      })
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    }
  }

 


}
