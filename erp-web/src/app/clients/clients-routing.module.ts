import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsDashboardComponent } from './clients-dashboard/clients-dashboard.component';

const routes: Routes = [
  { path: '', component: ClientsDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
