import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private sharedTravel: any;
  private sharedUser: any;



  setSharedData(data: any) {
    this.sharedTravel = data;
  }

  getSharedData() {
    return this.sharedTravel;
  }
  setSharedTravel(data: any) {
    this.sharedTravel = data;
  }

  getSharedTravel() {
    return this.sharedTravel;
  }
  setSharedUser(data: any) {
    this.sharedUser = data;
  }

  getSharedUser() {
    return this.sharedUser;
  }
}