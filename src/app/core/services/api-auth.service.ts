import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin, User } from '../models.module';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  baseURL: string = 'http://localhost:3000'

  constructor() {  }

  public http = inject(HttpClient)

//!Autenticacion usuario

  public getLoginByUser(user:User): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?email=${user.email}&password=${user.password}`)
  }

//!Autenticacion administrador

  public getLoginByAdmin(admin:Admin): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.baseURL}/admins/?userName=${admin.userName}&password=${admin.password}`)
  }



}
