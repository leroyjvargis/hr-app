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
  displayedColumns: string[] = ['username', 'type', 'pay_rate', 'hours_worked', 'overtime_rate', 'overtime_hours', 'deductions', 'tax_rate', 'gross_pay', 'actions'];
  // dataSource = new MatTableDataSource<PayrollData>(PAY_DATA);
  dataSource: MatTableDataSource<PayrollData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private payrollService: PayrollService) { }

  ngOnInit(): void {
    this.refreshData();
  }

  updateRow(data: PayrollData) {
    console.log(data)
  }

  calcGrossPay(data: PayrollData):number {
    let gross_pay: number;
    if (data.type == 'hourly') {
      gross_pay = data.hours_worked * data.pay_rate + data.overtime_rate * data.overtime_hours * data.pay_rate - data.deductions;
    } else {
      gross_pay = (data.pay_rate / 12) + data.overtime_rate * data.overtime_hours * (data.pay_rate / (12*160)) - data.deductions;
    }

    gross_pay = gross_pay - (gross_pay * data.tax_rate / 100);
    gross_pay = Number(gross_pay.toFixed(2));
    return gross_pay > 0 ? gross_pay : 0;
  }

  refreshData() {
    this.payrollService.get().subscribe(data => {
      data = data.map(v => ({...v, mode: 'list'}));
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
