import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log('clicked');
    return this.http.get('https://reqres.in/api/users')
  }

  firstClick(){
    console.log('firstClicked');
  }
}
