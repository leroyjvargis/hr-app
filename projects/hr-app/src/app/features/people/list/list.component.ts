import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  peopleData: any;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    // this.mockData = [
    //   { firstname: 'Leroy', lastname: 'Vargis', phone: '4801235544', email: 'leroy@hrapp.com', position: 'Software Developer', department: 'Technology', start_data: '2016-06-01' },
    //   { firstname: 'Jacob', lastname: 'Vargis', phone: '4801235544', email: 'jacob@hrapp.com', position: 'Software Developer II', department: 'eCommerce', start_data: '2018-08-15' },
    //   { firstname: 'John', lastname: 'Doe', phone: '4801235544', email: 'john@hrapp.com', position: 'HR Success Specialist', department: 'Human Resources', start_data: '2017-01-10' },
    //   { firstname: 'Jane', lastname: 'Smith', phone: '4801235544', email: 'jane@hrapp.com', position: 'Sales Engineer', department: 'Sales & Marketing', start_data: '2018-06-15' },
    //   { firstname: 'Anonymous', lastname: 'Person', phone: '4801235544', email: 'anon@hrapp.com', position: 'Manager, Sales', department: 'Sales & Marketing', start_data: '2019-07-14' },
    //   { firstname: 'John', lastname: 'Doe', phone: '4801235544', email: 'doe@hrapp.com', position: 'HR Success Specialist', department: 'Human Resources', start_data: '2017-01-10' },
    //   { firstname: 'Jane', lastname: 'Smith', phone: '4801235544', email: 'smith@hrapp.com', position: 'Sales Engineer', department: 'Sales & Marketing', start_data: '2018-06-15' },
    //   { firstname: 'Jacob', lastname: 'Vargis', phone: '4801235544', email: 'vargis@hrapp.com', position: 'Software Developer II', department: 'eCommerce', start_data: '2018-08-15' },
    // ]
    
    this.peopleService.get().subscribe(data => {
      this.peopleData = data;
      // console.log(data[0].firstname);
    })
  }

}
