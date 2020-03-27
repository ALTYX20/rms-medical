import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {

  public projectForm:FormGroup=new FormGroup({
    titre:new FormControl('',Validators.required),
    project_creator:new FormControl('',Validators.required),
    territories:new FormControl('',Validators.required),
    logo:new FormControl(''),
    status:new FormControl('1')
  })

  constructor(private dataService:DataService,private cd:ChangeDetectorRef) { }

  submit(){
    this.dataService.addProject(this.projectForm.value).subscribe(res=>{
      //
    },err=>{
      console.log(err);
    })
  }

  onFileChange(event){
    let reader = new FileReader();
    const [file]  = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.projectForm.patchValue({
        logo: reader.result
     });
  }
  this.cd.markForCheck();
}

  ngOnInit(): void {
  }

}
