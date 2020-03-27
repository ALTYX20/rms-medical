import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  // {
  //   "company": "4",
  //     "nom": "User12name",
  //     "prenom": "user12prename",
  //     "dateNaissance": "1996-02-04T00:00:00+00:00",
  //     "email": "user12@email.com",
  //     "adresse": "adrresUser12",
  //     "codepostal": "22",
  //     "city": "nabeul",
  //     "numTel": "25222555",
  //     "sexe": "homme",
  //     "role": "admin",
  //     "motpass": "123"
  // }

  registerForm:FormGroup=new FormGroup({
    company:new FormControl('',Validators.required),
    nom:new FormControl('',Validators.required),
    prenom:new FormControl('',Validators.required),
    dateNaissance:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    adresse:new FormControl('',Validators.required),
    codepostal:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    numTel:new FormControl('',Validators.required),
    sexe:new FormControl('',Validators.required),
    role:new FormControl(''),
    motpass:new FormControl('',Validators.required),
    confpass:new FormControl('',Validators.required),
  })

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    const creds = this.registerForm.value;
    if(!this.registerForm.invalid && creds.motpass===creds.confpass){
      delete creds.confpass;
      console.log(creds)
      this.authService.register(creds).subscribe(res=>{
        console.log(res)
        if(res=="User alredy exist") return;
        this.router.navigate(['register']);
      })
    }
  }

}
