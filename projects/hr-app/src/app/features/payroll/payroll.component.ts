import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PayrollData {
  username: string;
  payperiod: string;
  type: string;
  pay_rate: number;
  hours_worked: number;
  overtime_rate: number;
  overtime_hours: number;
  deductions: number;
  tax_rate: number;
  gross_pay: number;
  mode: string;
}

const PAY_DATA: PayrollData[] = [
  { username: "Leroy Jacob Vargis", payperiod: "20-06", type: "hourly", pay_rate: 20, hours_worked: 40, overtime_rate: 1.5, overtime_hours: 8, deductions: 50, tax_rate: 15, gross_pay: 400, mode: "list" },
  { username: "John Doe", payperiod: "20-06", type: "yearly", pay_rate: 80000, hours_worked: 40, overtime_rate: 2.5, overtime_hours: 2, deductions: 250, tax_rate: 25, gross_pay: 3400, mode: "list" },
  { username: "Jane Smith", payperiod: "20-06", type: "hourly", pay_rate: 20, hours_worked: 80, overtime_rate: 2, overtime_hours: 8, deductions: 30, tax_rate: 12, gross_pay: 800, mode: "list" },
  { username: "Anon Person", payperiod: "20-06", type: "yearly", pay_rate: 60000, hours_worked: 40, overtime_rate: 2, overtime_hours: 14, deductions: 150, tax_rate: 20, gross_pay: 1400, mode: "list" }
]

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {
  mode: string;
  displayedColumns: string[] = ['username', 'type', 'pay_rate', 'hours_worked', 'overtime_rate', 'overtime_hours', 'deductions', 'tax_rate', 'gross_pay', 'actions'];
  dataSource = new MatTableDataSource<PayrollData>(PAY_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.mode = 'list';

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  changeMode(newMode: string) {
    console.log(newMode)
    this.mode = newMode;
  }

  updateRow(data: PayrollData) {
    console.log(data)
  }

}
