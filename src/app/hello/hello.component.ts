import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  title = 'Hello Component';
  author;
  email = '2500269512@qq.com';

  constructor() {
  }

  ngOnInit() {
    console.log(this.author + '\'s Email:' + this.email);
  }

  setUserInfo() {
    this.author = 'Tony';
  }

  getHelloInfo() {
    if (this.author === undefined) {
      return undefined;
    }
    return this.author + '-' + this.email;
  }

}
