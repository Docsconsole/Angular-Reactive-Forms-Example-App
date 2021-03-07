import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../user.model/user';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent {

  userForm: FormGroup;
  user: User = {
    firstName: 'firstName',
    lastName: 'lastName',
    userName: 'userName',
    email: 'you@example.com',
    address1: 'Addres line1',
    address2: 'Addres line2'
  };

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'firstName': [this.user.firstName],
      'lastName': [this.user.lastName],
      'userName': [this.user.userName],
      'email': [this.user.email],
      'address1': [this.user.address1],
      'address2': [this.user.address2]
    });
  }


  logFormValue() {
    console.log(this.userForm.value);
  }

}