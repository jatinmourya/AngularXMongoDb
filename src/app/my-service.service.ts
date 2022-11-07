import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  data: any = [];

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3000/users');
  }

  postData(form: any) {
    return this.http.post('http://localhost:3000/addUser', form);
  }

  loginUser(form: any) {
    return this.http.post('http://localhost:3000/login', form);
  }

  isLoggedIn: boolean = false;
}
