import { Customer } from './../../customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-add',
  standalone: false,
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit{
  firstName : string = '';
  lastName : string = '';
  email : string = '';

  constructor(private customerService : CustomerService){

  }

  ngOnInit(): void {
  }


  addCustomer(){
    let customer = new Customer(0,this.firstName,this.lastName,this.email);
    console.log(customer);
    this.customerService.createCustomer(customer).subscribe(
      res => console.log(res)
    );
  }

}
