import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthentificationService } from '../authentication/authentification.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private _authService: AuthentificationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: this._authService.getToken()
      }
    });
    return next.handle(request);
  }

}
