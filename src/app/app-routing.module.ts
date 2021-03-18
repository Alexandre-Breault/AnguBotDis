import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandComponent } from './command/command.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartjsComponent } from './chartjs/chartjs.component';

const routes: Routes = [
  { path: 'Commandes', component: CommandComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'test', component: ChartjsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
