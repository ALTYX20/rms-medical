import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:BehaviorSubject<any> = new BehaviorSubject<any>(null)
  public errorReporter:ReplaySubject<any> = new ReplaySubject<any>();

  public get currentUserValue(){
    return this.user.value;
  }

  constructor(private http:HttpClient) { }

  login(creds){
    this.http.post<any>('http://127.0.0.1:8000/api/login',creds).subscribe(res=>{
      console.log(res);
      if(res==="password incorrect"){
        this.errorReporter.next(res);
        return;
      }
      if(res==="user dosent exist"){
        this.errorReporter.next(res);
        return;
      }
      if(res.status === 500){
        this.errorReporter.next(res);
        return;
      }
      this.user.next(res);
    },err=>{
      this.errorReporter.next(err.error.msg);
      console.log(err)
    })
    return this.user.asObservable();
  }

  register(creds){
    return this.http.post('http://127.0.0.1:8000/api/signup',creds);
  }

  getError(){
    return this.errorReporter.asObservable();
  }
}
