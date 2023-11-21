import { Component, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Travel } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-new-travel',
  templateUrl: './new-travel.component.html',
  styleUrls: ['./new-travel.component.css']
})
export class NewTravelComponent {

  listaViajes: Travel[] = [];
  constructor() { }

  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private apiService = inject(ApiService);

  formulario: FormGroup = this.formBuilder.group({
    id: 0,
    province: ['', [Validators.required]],
    place: ['', [Validators.required]],
    activities: ['', [Validators.required]],
    image: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: [, [Validators.required]]
  })
  altaViaje() {
    if (!this.formulario.valid) return;
    const viaje: Travel = {
      id: 0,
      province: this.formulario.controls['province'].value,
      place: this.formulario.controls['place'].value,
      activities: this.formulario.controls['activities'].value,
      image: this.formulario.controls['image'].value,
      description: this.formulario.controls['description'].value,
      price: this.formulario.controls['price'].value
    }
    this.apiService.postTravel(viaje).subscribe({
      next: (resp) => {
        alert(`El destino ${viaje.province}, ${viaje.place} fue agregado con exito`)
        this.router.navigate(['/travel'])
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}