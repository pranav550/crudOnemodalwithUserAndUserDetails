import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { map, filter} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get("../../assets/user.json")
  }



}
