import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface PayrollData {
  id: string;
  username: string;
  payperiod: string;
  salary_type: string;
  pay_rate: number;
  hours_worked: number;
  overtime_rate: number;
  overtime_hours: number;
  deductions: number;
  tax_rate: number;
  gross_pay: number;
}

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  constructor(private httpClient: HttpClient) {
    console.log("Loaded payroll service")
  }

  get() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var payPeriod = year + "-" + month;

    const url = "https://w73kurtrje.execute-api.us-east-1.amazonaws.com/beta-api/payroll?payperiod="+payPeriod;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.httpClient.get<PayrollData[]>(url, httpOptions);
  }

  update(data: PayrollData) {
    const url = "https://w73kurtrje.execute-api.us-east-1.amazonaws.com/beta-api/payroll";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.httpClient.put<PayrollData[]>(url, data, httpOptions);

  }
}
