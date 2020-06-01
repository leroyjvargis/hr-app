import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface Employee {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  start_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) {
    console.log("Loaded people service")
  }

  get() {
    const url = environment.base_url + "people"
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.httpClient.get<Employee[]>(url, httpOptions);
  }

  add(data: Employee) {
    const url = environment.base_url + "people"
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.httpClient.post<Employee>(url, data, httpOptions);
  }
}
