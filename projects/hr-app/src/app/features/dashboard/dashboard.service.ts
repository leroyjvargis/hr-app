import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface DashboardData {
  employeeCount: number;
  averagePay: number;
}
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {
    console.log("Loaded dashboard service")
  }

  get() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var payPeriod = year + "-" + month;

    const url = environment.base_url + "dashboard?payperiod=" + payPeriod;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.httpClient.get<DashboardData>(url, httpOptions);
  }
}
