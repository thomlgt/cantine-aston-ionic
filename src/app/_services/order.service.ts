import { EventEmitter, Injectable } from '@angular/core';
import { Meal } from '../_models/meal';
import { Menu } from '../_models/menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../_models/order';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ResourceService<number, Order>{

  tray;
  trayChange: EventEmitter<{}> = new EventEmitter();

  constructor(private http: HttpClient) {
    super(http, 'order')
  }

  cancel(id: number): Observable<Order> {
    return this.http.patch<Order>(`${environment.apiBaseUrl}/order/cancel/${id}`, id);
  }

  pay(id: number) : Observable<Order> {
    return this.http.patch<Order>(`${environment.apiBaseUrl}/order/deliverandpay/${id}/-1`, id);
  }

  getPrice(id: number) : Observable<Order> {
    return this.http.get<Order>(`${environment.apiBaseUrl}/order/computeprice/${id}/-1`);
  }

  // TRAY SPECIFIC
  addToTray(item: Object) {
    this.trayChange.emit(item);
  }

  storeTray(string): void {
    localStorage.setItem("TRAY", string);
  }

  clearTRay() {
    localStorage.removeItem("TRAY");
    this.trayChange.emit();
  }

  getTray() {
    return localStorage.getItem("TRAY");
  }
  
}
