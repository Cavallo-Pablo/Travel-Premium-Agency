import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Travel, Buys } from 'src/app/core/models.module';
import { ApiService } from 'src/app/core/services/api.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-new-buy',
  templateUrl: './new-buy.component.html',
  styleUrls: ['./new-buy.component.css']
})
export class NewBuyComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private sharedUser: SharedService,
    public sharedTravel: SharedService
  ) {}

  formulario: FormGroup = this.formBuilder.group({
    quantity: ['', [Validators.required]]
  });

  realizarCompra() {
    if (this.formulario.invalid) return;

    const travels: Travel = this.sharedTravel.getSharedTravel();
    const precioUnitario: number = travels ? travels.price || 0 : 0;

    const compra: Buys = {
      users: this.sharedUser.getSharedUser(),
      travels: this.sharedTravel.getSharedTravel(),
      amount: precioUnitario * this.formulario.controls['quantity'].value,
      quantity: this.formulario.controls['quantity'].value,
      id: null
    };

    this.apiService.postBuy(compra).subscribe({
      next: (resp) => {
        console.log('hasta aca funciona', resp);
        alert(`El viaje a ${compra.travels?.place}, fue comprado con éxito`);
        this.router.navigate(['/userPage']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnInit(): void {}

}
