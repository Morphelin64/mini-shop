import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { UserModel } from './user';
// import { UtilisateurAuth } from './utilisateurAuth';
// import { UtilisateurReponse } from './utilisateurReponse';

@Injectable()
export class UserService {
  private _items: UserModel.User[];
  get items() {
    return this._items;
  }

  constructor(private _http: Http) {}

  addItem = (newUser: UserModel.User): Observable<UserModel.Authentication> => {
    return this._http.post('http://localhost:3000/users/register', newUser)
      .map(resp => resp.json());
  }

  authenticate = (user: UserModel.Authentication): Observable<UserModel.Answer> => {
    return this._http.post('http://localhost:3000/users/authenticate', user)
      .map(resp => resp.json());
  }


}
