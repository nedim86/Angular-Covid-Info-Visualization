import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoading.asObservable();

  constructor() { }

  public pokaziLoader(){
    this.isLoading.next(true);
  }

  public sakrijLoader(){
    this.isLoading.next(false);
  }

}
