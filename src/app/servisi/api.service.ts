import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DrzavaModel } from '../interfaces/drzava-model';
import { delay, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  osnovniUrl: string = 'https://www.angular-kurs.online/api';

  constructor(private http: HttpClient) { }

  public getDrzave(): Observable<DrzavaModel[]> {
    return this.http.get<DrzavaModel[]>(`${this.osnovniUrl}/drzave`);
  }

  public getDrzavaPoCca3Kodu(cca3Kod: string) {
    return this.http.get(`${this.osnovniUrl}/drzave/${cca3Kod}`);
  }

  public getCovidInfo(naziv: string) {
    return this.http.get(`${this.osnovniUrl}/drzave/naziv/${naziv}`).pipe(switchMap((drzave: DrzavaModel[]) => {
      let drzava = drzave[0];
      return this.http.get(`${this.osnovniUrl}/Covid/${drzava.cca3}`);
    }))
  }

  
}
