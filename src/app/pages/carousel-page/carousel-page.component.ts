import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Travel } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-carousel-page',
  templateUrl: './carousel-page.component.html',
  styleUrls: ['./carousel-page.component.css']
})
export class CarouselPageComponent {


  listaViajes: Travel[] = [];

  viajes: Travel | undefined;

  ngOnInit(): void { this.mostrarViaje() }
  constructor(
    private travelService: ApiService,
    private router: Router,
    private dataSharing: SharedService
  ) { }
  mostrarViaje() {
    this.travelService.getsTravel().subscribe({
      next: (resp: Travel[]) => {
        /*  console.log(resp); */
        this.listaViajes = resp;
      }, error: (error: string) => {
        console.log('El tipo de error es: ' + error);
      }
    })
  }
  mostrarMensaje(viaje: Travel) {
    this.router.navigate(['/select'])
    console.log('Se hizo clic en el destino: \n\n' + JSON.stringify(viaje, null, 2));
    this.dataSharing.setSharedData(viaje);
  }
}
