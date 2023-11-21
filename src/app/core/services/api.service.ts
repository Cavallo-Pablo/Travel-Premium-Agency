import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { Buys, Message, Travel, User } from '../models.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = 'http://localhost:3000';

  constructor() { }

  public http = inject(HttpClient)

  //#region Servicio Usuario 
  getsUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }
  deleteUser(user: User): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/users/${user.id}`).pipe(
      map(resp => { return true; }),
      catchError(error => of(false))
    );
  }
  postUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/users`, user, { headers: { 'Content-type': 'application/json' } });
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/users/${id}`);
  }
  putUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseURL}/users/${user.id}`, user, {
      headers: { 'Content-type': 'application/json' }
    })
  }
  //#endregion
  //#region Servicio Destinos 
  getsTravel(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${this.baseURL}/travels`);
  }
  getTravel(id: number): Observable<Travel> {
    return this.http.get<Travel>(`${this.baseURL}/travels/${id}`);
  }
  deleteTravel(travel: Travel): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/travels/${travel.id}`).pipe(
      map(resp => { return true; }),
      catchError(error => of(false))
    );
  }
  postTravel(travel: Travel): Observable<Travel> {
    return this.http.post<Travel>(`${this.baseURL}/travels`, travel, { headers: { 'Content-type': 'application/json' } });
  }
  putTravel(travel: Travel): Observable<Travel> {
    return this.http.put<Travel>(`${this.baseURL}/travels/${travel.id}`, travel, {
      headers: { 'Content-type': 'application/json' }
    })
  }
  //#endregion
  //#region Servicio Mensajes 
  getsContact(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseURL}/message`);
  }
  deleteContact(message: Message): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/message/${message.id}`).pipe(
      map(resp => { return true; }),
      catchError(error => of(false))
    );
  }
  postContact(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.baseURL}/message`, message, { headers: { 'Content-type': 'application/json' } });
  }
  getContact(id: number): Observable<Message> {
    return this.http.get<Message>(`${this.baseURL}/message/${id}`);
  }
  putContact(message: Message): Observable<Message> {
    return this.http.put<Message>(`${this.baseURL}/message/${message.id}`, message, {
      headers: { 'Content-type': 'application/json' }
    })
  }

  //#endregion
  //#region Servicio Compras
  getsBuy(): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys`);
  }
  postBuy(buy: Buys): Observable<Buys> {
    const url = (`${this.baseURL}/buys`);
    return this.http.post<Buys>(`${this.baseURL}/buys`, buy, { headers: { 'Content-type': 'application/json' } });
  }
  deleteBuy(buy: Buys): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/buys/${buy.id}`).pipe(
      map(rep => { return true; }),
      catchError(error => of(false))
    );
  }
  getBuy(id: number): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys/${id}`);
  }
  getBuysByUserId(id: number): Observable<Buys[]> {
    return this.http.get<Buys[]>(`${this.baseURL}/buys?users.id=${id}`);
  }
  putBuy(buy: Buys): Observable<Buys> {
    return this.http.put<Buys>(`${this.baseURL}/buys/${buy.id}`, buy,
      { headers: { 'Content-type': 'application/json' } })
  }
  //#endregion
}