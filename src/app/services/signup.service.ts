import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { SignupData } from '../models/signup-data.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupDataSubject = new BehaviorSubject<SignupData>(null);
  private signupData: Observable<SignupData> = this.signupDataSubject.asObservable();

  constructor() { }

  // public saveData(data: any): Observable<SignupData> {
  //   return new Observable((observer) => {
  //     const { username, email, phoneNumber, country, state } = data || {} as any;
  //     this.signupDataSubject.next({ username, email, phoneNumber, country, state });
  //     observer.complete();
  //   });
  // }



  // public getData() {
  //   return this.signupData;
  // }


  //new code
  activatedEmitter = new BehaviorSubject<SignupData>(null);

}
