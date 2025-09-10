import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private api : string = 'http://localhost:8080/api/customer';

  constructor(private http:HttpClient) {}

    getCustomerList():Observable<Customer[]>{
      return this.http.get<Customer[]>(this.api+"/allCustomers");
    }

    createCustomer(customer: any): Observable<any> {
    return this.http.post<any>(this.api + "/saveCustomer", customer);
    }

    getCustomerById(id:number):Observable<Customer>{
      return this.http.get<Customer>(this.api+"/"+id)
    }

    deleteCustomerById(id : number) : Observable<any>{
      return this.http.delete(this.api+"/delete/"+id)
    }

}
