import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { ResourceService } from './resource.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<number, User> {

  constructor(private http: HttpClient, private tokenService: TokenService) {
    super(http, 'user')
  }

  register(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiBaseUrl}/user/register`, user);
  }

  login(user): Observable<any> {
    return this.http
      .post(`${environment.apiBaseUrl}/login`, user, { observe: "response" });
  }

  logout() {
    this.tokenService.clearStorage();
  }

  getCurrentUser() {
    let token = this.tokenService.getToken();
    if (token) {
      let user = this.tokenService.decodeToken(token).user;
      this.setProfilePicture(user);
      return user;
    }
    return null;
  }

  setProfilePicture(user: User) {
    if (user.isLunchLady) {
      user.imageId = 3;
    } else {
      user.imageId = user.sex;
    }
  }

  debit(id: number, montant: number): Observable<User> {
    return this.http
    .post<User>(`${environment.apiBaseUrl}/user/debit/${id}?amount=${montant}`, montant);
  }

  credit(id: number, montant: number): Observable<User> {
    return this.http.post<User>(`${environment.apiBaseUrl}/user/credit/${id}?amount=${montant}`, montant);
  }
}
