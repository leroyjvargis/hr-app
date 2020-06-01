import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  // firstname = new FormControl('');
  // lastname = new FormControl('');
  // email = new FormControl('');
  // phone = new FormControl('');
  // position = new FormControl('');
  // department = new FormControl('');
  // start_date = new FormControl('');

  employeeForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    position: new FormControl(''),
    department: new FormControl(''),
    start_date: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitFn() {
    console.log(this.employeeForm.value)
  }

}
