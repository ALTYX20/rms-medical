import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  apiUrl:string="";

  constructor(private http:HttpClient) { }

  addPresentation(presentation){
    console.log(presentation);
    return this.http.post("http://127.0.0.1:8000/api/presentation",presentation);
  }

  addReference(reference){
    console.log(reference);
    return this.http.post("http://127.0.0.1:8000/api/product",reference);
  }

  addMedia(media){
    console.log(media);
    return this.http.post("http://127.0.0.1:8000/api/media",media);
  }

  getPresenatationDetails(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/presenataion");
  }

  getReferenceDetails(){
    return this.http.get<any[]>("http://127.0.0.1:8000/api/reference");
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
    return this.http.request('delete', 'http://127.0.0.1:8000/api/reference', { body: payload });
  }

  deleteMedia(id){
    const payload = {id};
    return this.http.request('delete', 'http://127.0.0.1:8000/api/media', { body: payload });
  }

  modifyPresentation(presentation){
    console.log(presentation);
    return this.http.put("http://127.0.0.1:8000/api/Presentation",presentation);
  }

  modifyReference(reference){
    console.log(reference);
    return this.http.put("http://127.0.0.1:8000/api/reference",reference);
  }

  modifyMedia(media){
    console.log(media);
    return this.http.put("http://127.0.0.1:8000/api/company",media);
  }
}