import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  mockData: any;

  constructor() { }

  ngOnInit(): void {
    this.mockData = [
      { firstname: 'Leroy', lastname: 'Vargis', position: 'Software Developer', department: 'Technology', start_data: '2016-06-01' },
      { firstname: 'Jacob', lastname: 'Vargis', position: 'Software Developer II', department: 'eCommerce', start_data: '2018-08-15' },
      { firstname: 'John', lastname: 'Doe', position: 'HR Success Specialist', department: 'Human Resources', start_data: '2017-01-10' },
      { firstname: 'Jane', lastname: 'Smith', position: 'Sales Engineer', department: 'Sales & Marketing', start_data: '2018-06-15' },
      { firstname: 'Anonymous', lastname: 'Person', position: 'Manager, Sales', department: 'Sales & Marketing', start_data: '2019-07-14' },
      { firstname: 'John', lastname: 'Doe', position: 'HR Success Specialist', department: 'Human Resources', start_data: '2017-01-10' },
      { firstname: 'Jane', lastname: 'Smith', position: 'Sales Engineer', department: 'Sales & Marketing', start_data: '2018-06-15' },
      { firstname: 'Jacob', lastname: 'Vargis', position: 'Software Developer II', department: 'eCommerce', start_data: '2018-08-15' },
    ]
  }

}
