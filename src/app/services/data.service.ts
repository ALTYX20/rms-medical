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
    return this.http.post("http://127.0.0.1:8000/api/product",proj);
  }

  addCompany(comp){
    console.log(comp);
    return this.http.post("http://127.0.0.1:8000/api/company",comp);
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
  addPresentation(presentation){
    console.log(presentation);
    return this.http.post("http://127.0.0.1:8000/api/presentation",presentation);
  }

  addReference(reference){
    console.log(reference);
    return this.http.post("http://127.0.0.1:8000/api/referance",reference);
  }

  addMedia(media){
    console.log(media);
    return this.http.post("http://127.0.0.1:8000/api/media",media);
  }

  getPresenatationDetails(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/presentation");
  }

  getReferenceDetails(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/referance");
  }

  getMediaDetails(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/media");
  }

  deletePresentation(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/presentation', { body: payload });
  }

  deleteReference(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/referance', { body: payload });
  }

  deleteMedia(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/media', { body: payload });
  }

  modifyPresentation(presentation){
    console.log(presentation);
    return this.http.put("http://127.0.0.1:8000/api/presentation",presentation);
  }

  modifyReference(reference){
    console.log(reference);
    return this.http.put("http://127.0.0.1:8000/api/referance",reference);
  }

  modifyMedia(media){
    console.log(media);
    return this.http.put("http://127.0.0.1:8000/api/media",media);
  }


}
