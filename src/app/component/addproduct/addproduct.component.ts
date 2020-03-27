import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  public productForm:FormGroup=new FormGroup({
    nom:new FormControl('',Validators.required),
    logo:new FormControl('something.png'),
    type:new FormControl('',Validators.required),
    prix:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    project:new FormControl('1')
    
    
    
  })

  constructor(private cd:ChangeDetectorRef,private dataService:DataService,private router:Router) { }

//   onFileChange(event){
//     let reader = new FileReader();
//     const [file]  = event.target.files;
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       this.productForm.patchValue({
//         logo: reader.result
//      });
//   }
//   this.cd.markForCheck();
// }

  submit(){
    this.dataService.addProduct(this.productForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['listproduct'])
    },err=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
