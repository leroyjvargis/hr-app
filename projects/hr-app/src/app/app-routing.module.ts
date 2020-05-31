import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features/features.component';

import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'people', loadChildren: () => import('./features/people/people.module').then(m => m.PeopleModule) },
      { path: 'payroll', loadChildren: () => import('./features/payroll/payroll.module').then(m => m.PayrollModule) },
    ]
  },
  // {
  //   path: '',
  //   component: FooterOnlyLayoutComponent,
  //   children: [
  //     { path: 'login', loadChildren: '../login/login.module#LoginModule' },
  //     { path: 'registration', loadChildren: '../registration/registration.module#RegistrationModule' }
  //   ]
  // },
  // { path: 'home', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
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
