import { NgModule } from '@angular/core';

// import { SharedModule } from '../../shared/shared.module'
import { PeopleRoutingModule } from './people-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    // SharedModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
