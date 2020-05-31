import { NgModule } from '@angular/core';

// import { SharedModule } from '../../shared/shared.module'
import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll.component';


@NgModule({
  declarations: [PayrollComponent],
  imports: [
    // SharedModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
