import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';
import { OrderByService } from 'src/app/core/services/order-by.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  listaUsuarios: User[] = [];

  ngOnInit(): void { this.mostrarUsuario() }

  constructor( ) { }

  private apiServiceO = inject(OrderByService)
  private apiService = inject(ApiService)
  private router = inject(Router)

//#region Listar Usuario
  mostrarUsuario() {
    this.apiService.getsUser().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaUsuarios = resp;

      },
      error: (error) => {
        console.log('El tipo de error es: ' + error);
      }
    })
  }
//#endregion
//#region Eliminar Usuario
  eliminarUsuario(usuario: User) {
    const ok = confirm(`Desea eliminar a: \n${usuario.lastName}, ${usuario.name}  con el Id: ${usuario.id} `)
    if (!ok) { return; }
    this.apiService.deleteUser(usuario).subscribe({
      next: (resp) => {
        alert(`${usuario.lastName}, ${usuario.name} a sido eliminado con exito ✔`)
        window.location.href = '/user'
      },
      error: (error) => { console.log(error); }
    })
  }
//#endregion
//#region Ordenar usuario por :
  orderAscLastName() {
    this.apiServiceO.getOrderAscLastName().subscribe({
      next: (resp) => { 
        this.listaUsuarios = resp
      },
      error: (error) => {
        console.log(error)
        this.listaUsuarios = []
      }
    })
  }
  orderDescLastName() {
    this.apiServiceO.getOrderDescLastName().subscribe({
      next: (resp) => { 
        this.listaUsuarios = resp
      },
      error: (error) => {
        console.log(error)
        this.listaUsuarios = []
      }
    })
  }
  orderAscName() {
    this.apiServiceO.getOrderAscName().subscribe({
      next: (resp) => { 
        this.listaUsuarios = resp
      },
      error: (error) => {
        console.log(error)
        this.listaUsuarios = []
      }
    })
  }
  orderDescName() {
    this.apiServiceO.getOrderDescName().subscribe({
      next: (resp) => { 
        this.listaUsuarios = resp
      },
      error: (error) => {
        console.log(error)
        this.listaUsuarios = []
      }
    })
  }
  orderAscDni() {
    this.apiServiceO.getOrderAscDni().subscribe({
      next: (resp) => { 
        this.listaUsuarios = resp
      },
      error: (error) => {
        console.log(error)
        this.listaUsuarios = []
      }
    })
  }
  orderDescDni() {
    this.apiServiceO.getOrderDescDni().subscribe({
      next: (resp) => { 
        this.listaUsuarios = resp
      },
      error: (error) => {
        console.log(error)
        this.listaUsuarios = []
      }
    })
  }
  orderAscBirthdate() {
    this.apiServiceO.getOrderAscBirthdate().subscribe({
      next: (resp) => { 
        this.listaUsuarios = resp
      },
      error: (error) => {
        console.log(error)
        this.listaUsuarios = []
      }
    })
  }
  orderDescBirthdate() {
    this.apiServiceO.getOrderDescBirthdate().subscribe({
      next: (resp) => { 
        this.listaUsuarios = resp
      },
      error: (error) => {
        console.log(error)
        this.listaUsuarios = []
      }
    })
  }


//#endregion
 }
