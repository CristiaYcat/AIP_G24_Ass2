import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface QueryResult { 
  result: string;
  tempstring: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  static readonly NAME = 'Fei';
  static readonly PASSWORD = '123';
  name = '';
  password = '';
  result = '';
  tempstring = '';
  url = `http://localhost:4000/result`;

  constructor(private http: HttpClient) {
    this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        console.log(data);
      });
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data: QueryResult) => {
      alert('ok');
      this.result = data.result;
      this.tempstring = data.tempstring;
    });
  }

  // showTemp(): void {
  //   this.http.post('/result', {}).subscribe((data: QueryResult) => {
  //     this.result = data.result;
  //     this.tempstring = data.tempstring;
  //   });
  // }

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
