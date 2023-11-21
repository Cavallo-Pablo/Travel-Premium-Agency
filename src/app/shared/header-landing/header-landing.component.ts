import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.css']
})
export class HeaderLandingComponent {
  constructor(private router: Router) { }
  loginAdmin() { this.router.navigate(['/loginAdmin']) }
  loginUser() { this.router.navigate(['/login']) }
  register() { this.router.navigate(['/register']); console.log('hola'); }
}
