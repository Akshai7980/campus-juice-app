/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable object-shorthand */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
export const baseurl="https://web.sicsglobal.com/Campus_juice/api/";

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    public http: HttpClient
  ) { }

  getMethod(path) {
    return this.http.get(baseurl + path);
  }

  postMethod(path, param) {
    console.log('params:',param);
    return new Promise((resolve, reject) => {
      var headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      let options = { headers: headers };

      this.http.post(baseurl + path, param, options).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  postRequestWithoutParam(path) {
    return new Promise((resolve, reject) => {
      var headers = new HttpHeaders();
      headers.append("Accept", "application/json");
      headers.append("content-type", "application/json");
      let options = { headers: headers };

      this.http.post(baseurl + path, '', options).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

}
