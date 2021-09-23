import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private Rest_api = 'https://randomuser.me/api?result='

  private HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //Authorization: 'Bearer ' 
    })
  }

  constructor(private http: HttpClient) { }

  public getRandom(user: number): Observable<any> {
    const url = `${this.Rest_api}` + user;
    return this.http.get<any>(url,this.HttpOptions)
  }
}
