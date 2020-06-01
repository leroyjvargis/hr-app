import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll.component';


@NgModule({
  declarations: [PayrollComponent],
  imports: [
    PayrollRoutingModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class PayrollModule { }
