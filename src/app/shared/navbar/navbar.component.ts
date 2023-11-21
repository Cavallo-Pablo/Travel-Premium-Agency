import { Component } from '@angular/core';import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent {
  constructor(private router: Router) { }
  mostrar() {
    console.log('hola')  }
  
  loginAdmin() { this.router.navigate(['/loginAdmin']) }
  loginUser() { this.router.navigate(['/login']) }
  register() { this.router.navigate(['/register']); console.log('hola'); }
}


