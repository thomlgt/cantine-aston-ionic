import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Resource } from '../_models/resource';

@Injectable({
    providedIn: 'root'
})
export class ResourceService<I, T extends Resource<I>>{
    constructor(private httpClient: HttpClient, private endpoint: string) { }

    list(): Observable<T[]> {
        return this.httpClient.get<T[]>(`${environment.apiBaseUrl}/${this.endpoint}/findall`);
    }

    create(item: T): Observable<T> {
        return this.httpClient.put<T>(`${environment.apiBaseUrl}/${this.endpoint}/add`, item);
    }

    update(item: T): Observable<T> {
        return this.httpClient.patch<T>(`${environment.apiBaseUrl}/${this.endpoint}/update/${item.id}`, item);
    }

    get(id: I): Observable<T> {
        return this.httpClient.get<T>(`${environment.apiBaseUrl}/${this.endpoint}/find/${id}`);
    }

    getImg(id: I): Observable<T> {
        return this.httpClient.get<T>(`${environment.apiBaseUrl}/${this.endpoint}/findimg/${id}`);
    }

    delete(id: I) {
        return this.httpClient.delete(`${environment.apiBaseUrl}/${this.endpoint}/delete/${id}`)
    }
}
