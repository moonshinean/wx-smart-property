import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MinePayInfoService {

  constructor(
    private http: HttpClient
  ) { }
  public  getMinePayInfo(pamars): Observable<any> {
      return this.http.post(environment.dev_test_url + `/wx/getpaymentrecords`, pamars);
  }
}
