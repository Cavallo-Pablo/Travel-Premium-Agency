import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';
import { OrderByService } from 'src/app/core/services/order-by.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {

  ngOnInit(): void {  this.mostrarMensajes(); }

  private apiServiceO = inject(OrderByService)
  private apiService = inject(ApiService)
  private router = inject(Router)

  listaMensajes: Message[] = [];


    //#region Listar mensajes
  mostrarMensajes() {
    this.apiService.getsContact().subscribe({
      next: (resp) => {
        this.listaMensajes = resp
      },
      error: (error) => {
        console.log('El tipo de error es: ' + error)
      }
    })
  }
    //#endregion
    //#region Eliminar mensajes
  eliminarMensaje(message: Message) {
    const ok = confirm(`Desea eliminar el mensaje de :\n${message.name}, con asunto: ${message.subject} con Id: ${message.id} `)
    if (!ok) { return; }
    this.apiService.deleteContact(message).subscribe({
      next: (resp) => {
        alert(`El mensaje de: \n${message.name}, con el asunto ${message.subject} a sido eliminado con exito ✔`)
        window.location.href = '/message'
      },
      error: (error) => { console.log(error); }
    })

  }

    //#endregion
    //#region 
    orderAscName() {
      this.apiServiceO.getOrderAscNameM().subscribe({
        next: (resp) => { 
          this.listaMensajes = resp
        },
        error: (error) => {
          console.log(error)
          this.listaMensajes = []
        }
      })
    }
    orderDescName() {
      this.apiServiceO.getOrderDescNameM().subscribe({
        next: (resp) => { 
          this.listaMensajes = resp
        },
        error: (error) => {
          console.log(error)
          this.listaMensajes = []
        }
      })
    }

    orderAscSubject() {
      this.apiServiceO.getOrderAscSubject().subscribe({
        next: (resp) => { 
          this.listaMensajes = resp
        },
        error: (error) => {
          console.log(error)
          this.listaMensajes = []
        }
      })
    }
    orderDescSubject() {
      this.apiServiceO.getOrderDescSubject().subscribe({
        next: (resp) => { 
          this.listaMensajes = resp
        },
        error: (error) => {
          console.log(error)
          this.listaMensajes = []
        }
      })
    }

    orderAscEmail() {
      this.apiServiceO.getOrderAscEmail().subscribe({
        next: (resp) => { 
          this.listaMensajes = resp
        },
        error: (error) => {
          console.log(error)
          this.listaMensajes = []
        }
      })
    }
    orderDescEmail() {
      this.apiServiceO.getOrderDescEmail().subscribe({
        next: (resp) => { 
          this.listaMensajes = resp
        },
        error: (error) => {
          console.log(error)
          this.listaMensajes = []
        }
      })
    }

    orderAscPhone() {
      this.apiServiceO.getOrderAscPhone().subscribe({
        next: (resp) => { 
          this.listaMensajes = resp
        },
        error: (error) => {
          console.log(error)
          this.listaMensajes = []
        }
      })
    }
    orderDescPhone() {
      this.apiServiceO.getOrderDescPhone().subscribe({
        next: (resp) => { 
          this.listaMensajes = resp
        },
        error: (error) => {
          console.log(error)
          this.listaMensajes = []
        }
      })
    }








    //#endregion
}