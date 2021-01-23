import { HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/user';

interface ObjectFromToken {
  user: User;
  roles: string[];
  iss: string;
  aud: string;
  sub: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenChange: EventEmitter<any> = new EventEmitter();

  constructor(private helper: JwtHelperService) { }

  getToken() {
    return localStorage.getItem("ACCESS_TOKEN");
  }

  storeToken(token: string) {
    localStorage.setItem("ACCESS_TOKEN", token);
    this.tokenChange.emit();
  }

  clearStorage() {
    localStorage.clear();
    this.tokenChange.emit();
  }

  cleanResponse(response: HttpResponse<any>): string {
    return response.headers
      .get("Authorization")
      .substring("bearer ".length)
      .trim();
  }

  decodeToken(token): ObjectFromToken {
    return this.helper.decodeToken(token);
  }

  handleResponse(response) {
    let token = this.cleanResponse(response);
    this.storeToken(token);
  }
}
