import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-travel',
  templateUrl: './edit-travel.component.html',
  styleUrls: ['./edit-travel.component.css']
})
export class EditTravelComponent implements OnInit{
  ngOnInit(): void {
    this.initTravel();
  }

  private route = inject(ActivatedRoute)
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
  private apiService = inject(ApiService)

  formulario: FormGroup = this.formBuilder.group({
    editId: 0,
    editProvince: ['', [Validators.required]],
    editPlace: ['', [Validators.required]],
    editActivities: ['', [Validators.required]],
    editImage: ['', [Validators.required]],
    editDescription: ['', [Validators.required]],
    editPrice: [0, [Validators.required]]
  })
  initTravel() {
    this.route.params.subscribe(params => {
      const travelId = +params['id'];
      if (!isNaN(travelId)) {
        this.apiService.getTravel(travelId).subscribe({
          next: (resp) => {
            console.log(resp)
            this.formulario = this.formBuilder.group({
              editId: [resp.id],
              editProvince: [resp.province],
              editPlace: [resp.place],
              editActivities: [resp.activities],
              editImage: [resp.image],
              editDescription: [resp.description],
              editPrice: [resp.price]
            })
          }, error: (error) => { console.log(error) }
        })
      } else { console.log('Id de destino no valido') }
    })
  }
  editarViaje() {
    if (!this.formulario.valid) return;
    const viaje: Travel = {
      id: this.formulario.controls['editId'].value,
      province: this.formulario.controls['editProvince'].value,
      place: this.formulario.controls['editPlace'].value,
      activities: this.formulario.controls['editActivities'].value,
      image: this.formulario.controls['editImage'].value,
      description: this.formulario.controls['editDescription'].value,
      price: this.formulario.controls['editPrice'].value
    }
    this.apiService.putTravel(viaje).subscribe({
      next: (resp) => {
        console.log(viaje)
        alert(`El destino: ${viaje.province}, ${viaje.place} fue modificado con exito`)
        this.router.navigate(['/travel'])
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}