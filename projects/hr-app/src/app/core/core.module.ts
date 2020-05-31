import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CoreRoutingModule } from './core-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LandingComponent } from './layout/landing/landing.component';

@NgModule({
  declarations: [
    MainLayoutComponent, 
    HeaderComponent,
    SidebarComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    CoreRoutingModule,

    MatToolbarModule,
    MatButtonModule
  ],
})
export class CoreModule { }
