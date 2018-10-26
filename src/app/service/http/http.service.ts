import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public http;

  constructor(private Http: HttpClient) {
    this.http = Http;
  }
  get(url, params?: Object, cb?: Function) {
    let httpParams = new HttpParams();
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.get(url, {params: httpParams})
      .subscribe(data => {
        cb(data);
      });
  }

  public post(url, data?: Object, cb?: Function, options?: Object) {
    const vm = this;
    vm.http.post(url, data, options)
      .subscribe(res => {
        cb(res);
      });
  }

  public put(url, data?: Object, cb?: Function, options?: Object) {
    const vm = this;
    vm.http.put(url, data, options)
      .subscribe(res => {
        cb(res);
      });
  }

  public delete(url, params?: Object, cb?: Function) {
    let httpParams = new HttpParams();
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.delete(url, {params: httpParams})
      .subscribe(data => {
        cb(data);
      });
  }
}
