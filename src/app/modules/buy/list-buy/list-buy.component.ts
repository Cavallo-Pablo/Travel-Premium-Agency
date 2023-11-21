import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Buys } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';
import { OrderByService } from 'src/app/core/services/order-by.service';

@Component({
  selector: 'app-list-buy',
  templateUrl: './list-buy.component.html',
  styleUrls: ['./list-buy.component.css']
})
export class ListBuyComponent implements OnInit {

  listaCompras: Buys[] = [];

  ngOnInit(): void { this.mostrarCompra() }

  constructor() { }

  private apiService = inject(ApiService)
  private apiServiceO = inject(OrderByService)
  private router = inject(Router)

  mostrarCompra() {
    this.apiService.getsBuy().subscribe({
      next: (resp) => {
        console.log('Respuesta del servicio:', resp);
        this.listaCompras = resp;
        console.log('Lista de compras:' + resp.values);
      },
      error: (error) => {
        console.error('Error al obtener compras:' + error);
      }
    });
  }
  eliminarCompra(buy: Buys) {
    const ok = confirm(`Desea eliminar la compra de: \n${buy.users?.lastName}, ${buy.users?.name}\nal destino: ${buy.travels?.place} con el Id de compra: ${buy.id} `)
    if (!ok) { return; }
    this.apiService.deleteBuy(buy).subscribe({
      next: (resp) => {
        alert(`La compra de: ${buy.users?.lastName}, ${buy.users?.name} a sido eliminado con exito ✔`)
        window.location.href = '/buys'
      },
      error: (error) => { console.log(error); }
    })
  }
  orderAscLastName() {
    this.apiServiceO.getOrderAscLastNameC().subscribe({
      next: (resp) => {
        this.listaCompras = resp;
      },
      error: (error) => {
        console.log(error);
        this.listaCompras = [];
      }
    })
  }
  orderDescLastName() {
    this.apiServiceO.getOrderDescLastNameC().subscribe({
      next: (resp) => {
        this.listaCompras = resp
      },
      error: (error) => {
        console.log(error)
        this.listaCompras = []
      }
    })
  }
  orderAscName() {
    this.apiServiceO.getOrderAscNameC().subscribe({
      next: (resp) => {
        this.listaCompras = resp;
      },
      error: (error) => {
        console.log(error);
        this.listaCompras = [];
      }
    })
  }
  orderDescName() {
    this.apiServiceO.getOrderDescNameC().subscribe({
      next: (resp) => {
        this.listaCompras = resp
      },
      error: (error) => {
        console.log(error)
        this.listaCompras = []
      }
    })
  }
  orderAscPlace() {
    this.apiServiceO.getOrderAscPlaceC().subscribe({
      next: (resp) => {
        this.listaCompras = resp;
      },
      error: (error) => {
        console.log(error);
        this.listaCompras = [];
      }
    })
  }
  orderDescPlace() {
    this.apiServiceO.getOrderDescPlaceC().subscribe({
      next: (resp) => {
        this.listaCompras = resp
      },
      error: (error) => {
        console.log(error)
        this.listaCompras = []
      }
    })
  }
  orderAscAmount() {
    this.apiServiceO.getOrderAscAmount().subscribe({
      next: (resp) => {
        this.listaCompras = resp;
      },
      error: (error) => {
        console.log(error);
        this.listaCompras = [];
      }
    })
  }
  orderDescAmount() {
    this.apiServiceO.getOrderDescAmount().subscribe({
      next: (resp) => {
        this.listaCompras = resp
      },
      error: (error) => {
        console.log(error)
        this.listaCompras = []
      }
    })
  }
  orderAscQuantity() {
    this.apiServiceO.getOrderAscQuantity().subscribe({
      next: (resp) => {
        this.listaCompras = resp;
      },
      error: (error) => {
        console.log(error);
        this.listaCompras = [];
      }
    })
  }
  orderDescQuantity() {
    this.apiServiceO.getOrderDescQuantity().subscribe({
      next: (resp) => {
        this.listaCompras = resp
      },
      error: (error) => {
        console.log(error)
        this.listaCompras = []
      }
    })
  }
  orderAscProvince() {
    this.apiServiceO.getOrderAscProvinceC().subscribe({
      next: (resp) => {
        this.listaCompras = resp;
      },
      error: (error) => {
        console.log(error);
        this.listaCompras = [];
      }
    })
  }
  orderDescProvince() {
    this.apiServiceO.getOrderDescProvinceC().subscribe({
      next: (resp) => {
        this.listaCompras = resp
      },
      error: (error) => {
        console.log(error)
        this.listaCompras = []
      }
    })
  }
}