import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Utilisateur } from './utilisateur';
// import { UtilisateurAuth } from './utilisateurAuth';
// import { UtilisateurReponse } from './utilisateurReponse';

@Injectable()
export class UtilisateurService {
  private _items: Utilisateur.Data[];
  get items() {
    return this._items;
  }

  private _logged: Utilisateur.IsAuthenticated = new Utilisateur.IsAuthenticated();
  get logged() {
    return this._logged.logged;
  }
  set logged(logged: boolean) {
    this._logged.logged = logged;
  }

  constructor(private _http: Http) { }

  addItem = (newUser: object): Observable<Utilisateur.Reponse> => {
    return this._http.post('http://localhost:3000/users/register', newUser)
      .map(resp => resp.json());
  }

  authenticate = (user: Utilisateur.Authentification): Observable<Utilisateur.Reponse> => {
    return this._http.post('http://localhost:3000/users/authenticate', user)
      .map(resp => resp.json());
  }


}
