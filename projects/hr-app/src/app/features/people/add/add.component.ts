import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  employeeForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    position: new FormControl(''),
    department: new FormControl(''),
    start_date: new FormControl(''),
  });
  showSuccess: boolean;

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.showSuccess = false;
  }

  submitFn() {
    console.log(this.employeeForm.value)
    this.peopleService.add(this.employeeForm.value).subscribe();
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 5000);
    // this.router.navigate(['/people/add']);
  }

}
