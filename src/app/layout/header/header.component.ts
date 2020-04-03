import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue
    //console.log(this.user)
  }

  logout(){
    this.authService.logout();
    window.location.href = "http://localhost:4200/register"//this.router.navigate(['register']);
  }

}
