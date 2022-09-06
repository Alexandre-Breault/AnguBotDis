import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandComponent } from './command/command.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  { path: 'Commandes', component: CommandComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Administration', component: AdministrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
