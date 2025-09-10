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


  addCustomer() {
    const customer = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };

    console.log('Cliente a enviar:', customer);

    this.customerService.createCustomer(customer).subscribe({
      next: (res) => {
        console.log('Cliente creado con éxito:', res);
        this.resetForm();
      },
      error: (err) => {
        console.error('Error al crear el cliente:', err);
      }
    });
  }

  resetForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }
}
