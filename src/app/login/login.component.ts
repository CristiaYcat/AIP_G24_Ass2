import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  static readonly NAME = 'Fei';
  static readonly PASSWORD = '123';
  name = '';
  password = '';

  onClickCheck(): void {
    if (
      this.name === LoginComponent.NAME &&
      this.password === LoginComponent.PASSWORD
    ) {
      alert('Aye Aye Sir!');
    } else if (
      this.name !== LoginComponent.NAME &&
      this.password === LoginComponent.PASSWORD
    ) {
      alert('Wrong Name Typed!');
    } else if (
      this.name === LoginComponent.NAME &&
      this.password !== LoginComponent.PASSWORD
    ) {
      alert('Wrong Password Typed!');
    } else {
      alert('Wrong Name and Password Typed!');
    }
  }
}
