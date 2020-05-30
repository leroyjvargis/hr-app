import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { 
    path: 'people', 
    loadChildren: () => import('./features/people/people.module').then(m => m.PeopleModule) 
  }, 
  { 
    path: 'payroll', 
    loadChildren: () => import('./features/payroll/payroll.module').then(m => m.PayrollModule) 
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
