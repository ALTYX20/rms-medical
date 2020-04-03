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
    return this.http.post("http://127.0.0.1:8000/api/product",prod);
  }

  addProject(proj){
    console.log(proj);
    return this.http.post("http://127.0.0.1:8000/api/project",proj);
  }

  addCompany(comp){
    return this.http.post<any>("http://127.0.0.1:8000/api/company",comp);
  }

  addPresentation(pres){
    return this.http.post("http://127.0.0.1:8000/api/presentaion",pres);
  }

  addMedia(med){
    return this.http.post("http://127.0.0.1:8000/api/media",med);
  }

  addRef(ref){
    return this.http.post("http://127.0.0.1:8000/api/reference",ref);
  }

  getProdList(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/product");
  }

  getProjList(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/project");
  }

  getCompList(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/companys");
  }

  getPresList(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/presentation");
  }

  getMedList(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/media");
  }

  getRefList(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/referance");
  }

  deleteProd(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/product', { body: payload });
  }

  deleteProj(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/project', { body: payload });
  }

  deleteComp(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/company', { body: payload });
  }

  deletePres(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/presentation', { body: payload });
  }

  deleteMed(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/media', { body: payload });
  }

  deleteRef(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/reference', { body: payload });
  }

  modifyProd(prod){
    console.log(prod);
    return this.http.put("http://127.0.0.1:8000/api/product",prod);
  }

  modifyProj(proj){
    console.log(proj);
    return this.http.put("http://127.0.0.1:8000/api/project",proj);
  }

  modifyComp(comp){
    console.log(comp);
    return this.http.put("http://127.0.0.1:8000/api/company",comp);
  }

  modifyPres(comp){
    console.log(comp);
    return this.http.put("http://127.0.0.1:8000/api/presentation",comp);
  }

  modifyMed(comp){
    console.log(comp);
    return this.http.put("http://127.0.0.1:8000/api/media",comp);
  }

  modifyRef(comp){
    console.log(comp);
    return this.http.put("http://127.0.0.1:8000/api/reference",comp);
  }

}
