import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Buys, Message, Travel, User } from '../models.module';

@Injectable({
  providedIn: 'root'
})
export class OrderByService {

  baseURL: string = 'http://localhost:3000';

  constructor() { }
 
  public http = inject(HttpClient)

  //#region  Orden Usuario
  //! Apellido
  public getOrderAscLastName(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?_sort=lastName&_order=asc`)
  }
  public getOrderDescLastName(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?_sort=lastName&_order=desc`)
  }
  //! Nombre
  public getOrderAscName(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?_sort=name&_order=asc`)
  }
  public getOrderDescName(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?_sort=name&_order=desc`)
  }
  //! Dni
  public getOrderAscDni(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?_sort=dni&_order=asc`)
  }
  public getOrderDescDni(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?_sort=dni&_order=desc`)
  }
  //! Fecha de nacimiento
  public getOrderAscBirthdate(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?_sort=dni&_order=asc`)
  }
  public getOrderDescBirthdate(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?_sort=dni&_order=desc`)
  }
  //#endregion
  
  //#region  Orden Viajes
  public getOrderAscProvince(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${this.baseURL}/travels?_sort=province&_order=asc`)
  }
  public getOrderDescProvince(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${this.baseURL}/travels?_sort=province&_order=desc`)
  }
  public getOrderAscPlace(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${this.baseURL}/travels?_sort=place&_order=asc`)
  }
  public getOrderDescPlace(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${this.baseURL}/travels?_sort=place&_order=desc`)
  }
  public getOrderAscPrice(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${this.baseURL}/travels?_sort=price&_order=asc`)
  }
  public getOrderDescPrice(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${this.baseURL}/travels?_sort=price&_order=desc`)
  }
  //#endregion

  //#region  Orden Mensajes
  public getOrderAscNameM(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseURL}/message?_sort=name&_order=asc`)
  }
  public getOrderDescNameM(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseURL}/message?_sort=name&_order=desc`)
  }
  public getOrderAscSubject(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseURL}/message?_sort=subject&_order=asc`)
  }
  public getOrderDescSubject(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseURL}/message?_sort=subject&_order=desc`)
  }
  public getOrderAscEmail(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseURL}/message?_sort=email&_order=asc`)
  }
  public getOrderDescEmail(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseURL}/message?_sort=email&_order=desc`)
  }
  public getOrderAscPhone(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseURL}/message?_sort=phone&_order=asc`)
  }
  public getOrderDescPhone(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseURL}/message?_sort=phone&_order=desc`)
  }
  //#endregion
  
  //#region  Orden Compras
  public getOrderAscLastNameC(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys/users?_sort=users.lastName&_order=asc`)
  }
  public getOrderDescLastNameC(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys/users?_sort=users.lastName&_order=desc`)
  }
  public getOrderAscNameC(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=name&_order=asc`)
  }
  public getOrderDescNameC(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=name&_order=desc`)
  }
  public getOrderAscProvinceC(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=province&_order=asc`)
  }
  public getOrderDescProvinceC(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=province&_order=desc`)
  }
  public getOrderAscPlaceC(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=place&_order=asc`)
  }
  public getOrderDescPlaceC(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=place&_order=desc`)
  }
  public getOrderAscAmount(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=amount&_order=asc`)
  }
  public getOrderDescAmount(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=amount&_order=desc`)
  }
  public getOrderAscQuantity(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=quantity&_order=asc`)
  }
  public getOrderDescQuantity(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?_sort=quantity&_order=desc`)
  }
  //#endregion
}