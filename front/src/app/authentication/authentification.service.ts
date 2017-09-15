import { Injectable } from '@angular/core';

import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthentificationService {

  constructor() { }

  public getToken = (): string => {
    return localStorage.getItem('Jwt-user-token');
  }

  public isLogged = (): boolean => {
    const token = this.getToken();
    console.log('authService => islogged : ', token );
    const jwt = new JwtHelper();
    // jwt.decodeToken(token);
    // jwt.getTokenExpirationDate(token);
    if (token) {
      return !jwt.isTokenExpired(token);
    } else {
      return false;
    }
  }

}
