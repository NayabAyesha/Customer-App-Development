import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  standalone: false
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  searchQuery = '';

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customers = this.customerService.getCustomers();
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer.code);
    this.loadCustomers();
  }

  get pagedCustomers() {
    let filteredCustomers = this.customers;
    if (this.searchQuery) {
      const lowerQuery = this.searchQuery.toLowerCase();
      filteredCustomers = this.customers.filter(
        (customer) =>
          customer.code.toLowerCase().includes(lowerQuery) ||
          customer.name.toLowerCase().includes(lowerQuery) ||
          customer.email?.toLowerCase().includes(lowerQuery) ||
          customer.phone?.toLowerCase().includes(lowerQuery)
      );
    }

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filteredCustomers.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    let filteredCustomers = this.customers;
    if (this.searchQuery) {
      const lowerQuery = this.searchQuery.toLowerCase();
      filteredCustomers = this.customers.filter(
        (customer) =>
          customer.code.toLowerCase().includes(lowerQuery) ||
          customer.name.toLowerCase().includes(lowerQuery) ||
          customer.email?.toLowerCase().includes(lowerQuery) ||
          customer.phone?.toLowerCase().includes(lowerQuery)
      );
    }
    return Math.ceil(filteredCustomers.length / this.itemsPerPage);
  }

  logout() {
    localStorage.removeItem('customers');
    this.router.navigate(['/login']);
  }
}
