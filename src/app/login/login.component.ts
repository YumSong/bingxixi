import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url = 'http://hongto-w10.corp.oocl.com:8765/user';
  isLogin = false;
  username = 'asdf';
  password = '';
  http;

  constructor(private httpService: HttpService) {
    this.http = httpService;
  }

  ngOnInit() {
    this.http.get(this.url, {}, res => {
      console.log('结果', res.username);
      if (res.username !== undefined) {
        this.username = res.username;
        this.isLogin = true;
      }
    });
  }

}
