import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';

@Component({
  selector: 'app-customers-list',
  standalone: false,
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent implements OnInit{
  customers : Customer [] = [];

  constructor(private customerService : CustomerService){}

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers(){
    this.customerService.getCustomerList().subscribe(
      data=> {
        this.customers = data;
        console.log(this.customers);
      }
    );
  }

  deleteCustomer(id:number){
    console.log(id);
    this.customerService.deleteCustomerById(id).subscribe(
      ()=>this.listCustomers()
    );
  }
}

