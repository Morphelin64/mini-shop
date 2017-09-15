import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { UserModel } from '../user/user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private _UserServiceModel: UserService) { }

  ngOnInit() {
  }

  login = (email: string, password: string): void => {
    console.log('onsubmit');
    this._UserServiceModel.authenticate({ email: email, password })
      .subscribe((answer: UserModel.Answer) => {
        console.log('authenticate ok token : ', answer );
      });
  }

}
