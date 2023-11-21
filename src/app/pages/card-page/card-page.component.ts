import { Component, OnDestroy, OnInit } from '@angular/core';
import { Travel } from 'src/app/core/models.module';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit, OnDestroy {
  ngOnInit(): void { }
  ngOnDestroy(): void { }
  viajes: Travel = {
    id: null,
    province: null,
    place: null,
    activities: null,
    image: null,
    description: null,
    price: null
  };
  constructor(private dataSharing: SharedService) {
    this.viajes = this.dataSharing.getSharedData()
  }
}
