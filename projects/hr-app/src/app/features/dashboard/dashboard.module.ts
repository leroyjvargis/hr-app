import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    MatIconModule,
    
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
