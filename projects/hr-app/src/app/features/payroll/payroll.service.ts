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

  get(payPeriod: string) {
    const url = environment.base_url + "payroll?payperiod=" + payPeriod;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.httpClient.get<PayrollData[]>(url, httpOptions);
  }

  update(data: PayrollData) {
    const url = environment.base_url + "payroll";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    return this.httpClient.put<PayrollData[]>(url, data, httpOptions);

  }
}
