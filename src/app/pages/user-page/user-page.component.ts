import { Component, inject } from '@angular/core';
import { Buys } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  listaCompras: Buys[] = [];

  constructor() { }


  private apiService = inject(ApiService)
  private sharedService = inject(SharedService)

  ngOnInit(): void { this.initBuy(); }

  initBuy() {
    const sharedUser = this.sharedService.getSharedUser();
    if (sharedUser && sharedUser.id) {
      this.apiService.getBuysByUserId(sharedUser.id).subscribe(
        (buys) => {
          this.listaCompras = buys;          
        },
        (error) => {
          console.error('Error al obtener las compras del usuario', error);
        }
      );
    }
  }
}

