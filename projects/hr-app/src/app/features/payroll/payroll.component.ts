import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
  gross_pay: number
}

const PAY_DATA: PayrollData[] = [
  {username: "Leroy Jacob Vargis", payperiod: "20-06", type: "hourly", pay_rate: 20, hours_worked: 40, overtime_rate: 1.5, overtime_hours: 8, deductions: 50, tax_rate: 15, gross_pay: 400},
  {username: "John Doe", payperiod: "20-06", type: "salary", pay_rate: 80000, hours_worked: 40, overtime_rate: 2.5, overtime_hours: 2, deductions: 250, tax_rate: 25, gross_pay: 3400},
  {username: "Jane Smith", payperiod: "20-06", type: "hourly", pay_rate: 20, hours_worked: 80, overtime_rate: 2, overtime_hours: 8, deductions: 30, tax_rate: 12, gross_pay: 800},
  {username: "Anon Person", payperiod: "20-06", type: "salary", pay_rate: 60000, hours_worked: 40, overtime_rate: 2, overtime_hours: 14, deductions: 150, tax_rate: 20, gross_pay: 1400}
]

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {
  displayedColumns: string[] = ['username', 'type', 'pay_rate', 'hours_worked', 'overtime_rate', 'overtime_hours', 'deductions', 'tax_rate', 'gross_pay', 'actions'];
  dataSource = new MatTableDataSource<PayrollData>(PAY_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
