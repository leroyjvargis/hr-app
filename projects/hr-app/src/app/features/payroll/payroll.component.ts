import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';

import { PayrollService, PayrollData } from './payroll.service';


@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {
  displayedColumns: string[] = ['username', 'salary_type', 'pay_rate', 'hours_worked', 'overtime_rate', 'overtime_hours', 'deductions', 'tax_rate', 'gross_pay', 'actions'];
  // dataSource = new MatTableDataSource<PayrollData>(PAY_DATA);
  dataSource: MatTableDataSource<PayrollData>;
  currentPeriod: string;
  currentPeriodString: string;
  currentPeriodDate: Date;
  showNextPeriodBtn: boolean;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private payrollService: PayrollService) { }

  ngOnInit(): void {
    this.currentPeriodDate = new Date();
    this.currentPeriodString = this.currentPeriodDate.toLocaleString('default', {month: 'long'}) + ' ' + this.currentPeriodDate.getFullYear().toString();
    this.showNextPeriodBtn = false;

    var d = new Date();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    this.currentPeriod = year + "-" + month;

    this.refreshData();
  }

  updateRow(data: PayrollData) {
    console.log(data)
    this.payrollService.update(data).subscribe();
  }

  calcGrossPay(data: PayrollData):number {
    let gross_pay: number;
    if (data.salary_type == 'hourly') {
      gross_pay = data.hours_worked * data.pay_rate + data.overtime_rate * data.overtime_hours * data.pay_rate - data.deductions;
    } else {
      gross_pay = (data.pay_rate / 12) + data.overtime_rate * data.overtime_hours * (data.pay_rate / (12*160)) - data.deductions;
    }

    gross_pay = gross_pay - (gross_pay * data.tax_rate / 100);
    gross_pay = Number(gross_pay.toFixed(2));
    return gross_pay > 0 ? gross_pay : 0;
  }

  refreshData() {
    this.payrollService.get(this.currentPeriod).subscribe(data => {
      data = data.map(v => ({...v, mode: 'list'}));
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  updatePayPeriod(mode: string) {
    if (mode == 'decrement') {
      this.currentPeriodDate.setMonth(this.currentPeriodDate.getMonth()-1);
      this.currentPeriodString = this.currentPeriodDate.toLocaleString('default', {month: 'long'}) + ' ' + this.currentPeriodDate.getFullYear().toString();
      this.showNextPeriodBtn = true;
      this.currentPeriod = this.currentPeriodDate.getFullYear().toString() + "-" + (this.currentPeriodDate.getMonth() + 1);
    } else {
      this.currentPeriodDate.setMonth(this.currentPeriodDate.getMonth() + 1);
      this.currentPeriodString = this.currentPeriodDate.toLocaleString('default', {month: 'long'}) + ' ' + this.currentPeriodDate.getFullYear().toString();
      var today = new Date();
      if (this.currentPeriodDate.getMonth() == today.getMonth()) {
        this.showNextPeriodBtn = false;
      }
      this.currentPeriod = this.currentPeriodDate.getFullYear().toString() + "-" + (this.currentPeriodDate.getMonth() + 1);
    }
    this.refreshData();
  }

}
