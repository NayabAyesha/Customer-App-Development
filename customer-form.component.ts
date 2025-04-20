import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  standalone: false
})
export class CustomerFormComponent implements OnInit {
  customer: Customer = { code: '', name: '', phone: '', email: '', creditDays: 0, creditAmount: 0 };
  isEditMode = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.isEditMode = true;
      this.loadCustomer(code);
    }
  }

  loadCustomer(code: string) {
    const customers = JSON.parse(localStorage.getItem('customers') || '[]');
    this.customer = customers.find((c: Customer) => c.code === code) || { code: '', name: '', phone: '', email: '', creditDays: 0, creditAmount: 0 };
  }

  saveCustomer() {
    let customers = JSON.parse(localStorage.getItem('customers') || '[]');
    if (this.isEditMode) {
      customers = customers.map((c: Customer) => c.code === this.customer.code ? this.customer : c);
    } else {
      customers.push(this.customer);
    }
    localStorage.setItem('customers', JSON.stringify(customers));
    this.router.navigate(['/customers']);
  }
}
