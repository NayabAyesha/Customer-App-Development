import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false
})
export class AppComponent implements OnInit {
  title = 'Customer-Management-App';

  constructor(private router: Router) {}

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.router.navigate(['/customers']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
