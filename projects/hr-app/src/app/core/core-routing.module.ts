import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LandingComponent } from './layout/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
      // { path: 'registration', loadChildren: '../registration/registration.module#RegistrationModule' }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'people', loadChildren: () => import('../features/people/people.module').then(m => m.PeopleModule) },
      { path: 'payroll', loadChildren: () => import('../features/payroll/payroll.module').then(m => m.PayrollModule) },
    ]
  },
  // { path: 'home', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
