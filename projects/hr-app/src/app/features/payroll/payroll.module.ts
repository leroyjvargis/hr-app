import { NgModule } from '@angular/core';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll.component';


@NgModule({
  declarations: [PayrollComponent],
  imports: [
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
