import { Component, OnInit } from '@angular/core';
import { DashboardService, DashboardData } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardData;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.get().subscribe(data => {
      this.dashboardData = data;
    });
  }

}
