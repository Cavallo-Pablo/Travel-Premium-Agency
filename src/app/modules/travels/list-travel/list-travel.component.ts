import { Component, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared.service';
import { Travel } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';
import { OrderByService } from 'src/app/core/services/order-by.service';

@Component({
  selector: 'app-list-travel',
  templateUrl: './list-travel.component.html',
  styleUrls: ['./list-travel.component.css']
})

export class ListTravelComponent implements OnInit {


  listaViajes: Travel[] = [];

  viajes: Travel | undefined;

  ngOnInit(): void { this.mostrarViaje() }

  constructor() { }

  private apiServiceO = inject(OrderByService)
  private apiService = inject(ApiService)
  private dataSharing = inject(SharedService)
  private router = inject(Router)

  //#region Listar Viaje
  mostrarViaje() {
    this.apiService.getsTravel().subscribe({
      next: (resp) => {
        /*  console.log(resp); */
        this.listaViajes = resp;
      }, error: (error) => {
        console.log('El tipo de error es: ' + error);
      }
    })
  }
  //#endregion

  //#region Eliminar viaje
  eliminarViaje(viaje: Travel) {
    const ok = confirm(`Desea eliminar el destino: \n${viaje.province}, ${viaje.place} \ncon el id: ${viaje.id}`)
    if (!ok) { return; }
    this.apiService.deleteTravel(viaje).subscribe({
      next: (resp) => {
        alert(`${viaje.province},${viaje.price} a sido eliminado con exito ✔`)
        window.location.href = '/travel'
      },
      error: (error) => { console.log(error); }
    })
  }
  //#endregion
 
  //#region 
  orderAscProvince() {
    this.apiServiceO.getOrderAscProvince().subscribe({
      next: (resp) => { 
        this.listaViajes = resp
      },
      error: (error) => {
        console.log(error)
        this.listaViajes = []
      }
    })
  }
  orderDescProvince() {
    this.apiServiceO.getOrderDescProvince().subscribe({
      next: (resp) => { 
        this.listaViajes = resp
      },
      error: (error) => {
        console.log(error)
        this.listaViajes = []
      }
    })
  }

  orderAscPlace() {
    this.apiServiceO.getOrderAscPlace().subscribe({
      next: (resp) => { 
        this.listaViajes = resp
      },
      error: (error) => {
        console.log(error)
        this.listaViajes = []
      }
    })
  }
  orderDescPlace() {
    this.apiServiceO.getOrderDescPlace().subscribe({
      next: (resp) => { 
        this.listaViajes = resp
      },
      error: (error) => {
        console.log(error)
        this.listaViajes = []
      }
    })
  }

  orderAscPrice() {
    this.apiServiceO.getOrderAscPrice().subscribe({
      next: (resp) => { 
        this.listaViajes = resp
      },
      error: (error) => {
        console.log(error)
        this.listaViajes = []
      }
    })
  }
  orderDescPrice() {
    this.apiServiceO.getOrderDescPrice().subscribe({
      next: (resp) => { 
        this.listaViajes = resp
      },
      error: (error) => {
        console.log(error)
        this.listaViajes = []
      }
    })
  }



  //#endregion

}