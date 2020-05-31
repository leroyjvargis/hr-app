import { NgModule } from '@angular/core';

import { PeopleRoutingModule } from './people-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
