import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly STORAGE_KEY = 'customers';

  getCustomers(): Customer[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  getCustomer(code: string): Customer | undefined {
    return this.getCustomers().find((customer) => customer.code === code);
  }

  saveCustomer(customer: Customer): void {
    const customers = this.getCustomers();
    const index = customers.findIndex((c) => c.code === customer.code);

    if (index === -1) {
      customers.push(customer);
    } else {
      customers[index] = customer;
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(customers));
  }

  deleteCustomer(code: string): void {
    const customers = this.getCustomers().filter((customer) => customer.code !== code);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(customers));
  }
}
