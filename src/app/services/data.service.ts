import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl:string="";

  constructor(private http:HttpClient) { }

  addProduct(prod){
    console.log(prod);
    return this.http.post("http://192.168.1.102:8000/api/product",prod);
  }

  addProject(proj){
    console.log(proj);
    return this.http.post("http://192.168.1.102:8000/api/product",proj);
  }

  addCompany(comp){
    console.log(comp);
    return this.http.post("http://192.168.1.102:8000/api/company",comp);
  }

  getProdList(){
    return this.http.get<any[]>("http://192.168.1.102:8000/api/product");
  }

  getProjList(){
    return this.http.get<any[]>("http://192.168.1.102:8000/api/project");
  }

  getCompList(){
    return this.http.get<any[]>("http://192.168.1.102:8000/api/companys");
  }

  deleteProd(id){
    const payload = {id};
    return this.http.request('delete', 'http://192.168.1.102:8000/api/product', { body: payload });
  }

  deleteProj(id){
    const payload = {id};
    return this.http.request('delete', 'http://192.168.1.102:8000/api/project', { body: payload });
  }

  deleteComp(id){
    const payload = {id};
    return this.http.request('delete', 'http://192.168.1.102:8000/api/company', { body: payload });
  }

  modifyProd(prod){
    console.log(prod);
    return this.http.put("http://192.168.1.102:8000/api/product",prod);
  }

  modifyProj(proj){
    console.log(proj);
    return this.http.put("http://192.168.1.102:8000/api/project",proj);
  }

  modifyComp(comp){
    console.log(comp);
    return this.http.put("http://192.168.1.102:8000/api/company",comp);
  }

}
