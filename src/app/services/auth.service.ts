import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:BehaviorSubject<any> = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')))
  public errorReporter:ReplaySubject<any> = new ReplaySubject<any>();

  public get currentUserValue(){
    return this.user.value;
  }

  constructor(private http:HttpClient,private dataService:DataService) { }

  login(creds){
    this.http.post<any>('http://127.0.0.1:8000/api/login',creds).subscribe(res=>{
      console.log(res);
      if(res==="password incorrect"){
        this.errorReporter.next(res);
        return;
      }
      if(res==="user doesn't exist"){
        this.errorReporter.next(res);
        return;
      }
      let newUser = {id:res[0],name:res[1],role:res[2]}
      localStorage.setItem('user',JSON.stringify(newUser));
      this.user.next(newUser);
    },err=>{
      this.errorReporter.next(err.statusText);
      console.log(err)
    })
    return this.user.asObservable();
  }

  logout(){
    this.user.next(null);
    localStorage.removeItem('user');
  }

  register(data){
    this.dataService.addCompany(data).subscribe(res => {
      console.log(res);
      if (res == "company already exist") {
        this.errorReporter.next(res);
        return;
      }
      let newUser = {id:res[0],name:res[1],role:res[2]}
      localStorage.setItem('user',JSON.stringify(newUser));
      this.user.next(newUser);
    },err=>{
      this.errorReporter.next(err.statusText);
      console.log(err)
    });
    return this.user.asObservable();
  }

  getError(){
    return this.errorReporter.asObservable();
  }
}
