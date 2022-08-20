import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsDashboardComponent } from './clients-dashboard/clients-dashboard.component';


@NgModule({
  declarations: [
    ClientsDashboardComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
