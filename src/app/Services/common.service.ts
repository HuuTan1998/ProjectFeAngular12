import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public count = 0;

  public binhPhuong(n :number) :number{
    return n*n;
  }

  constructor() { }
}
