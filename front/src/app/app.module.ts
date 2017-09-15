import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthentificationService } from './authentication/authentification.service';
import { UserService } from './user/user.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProductComponent,
    CartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthentificationService,
    UserService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
