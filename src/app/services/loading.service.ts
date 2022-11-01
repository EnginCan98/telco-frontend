import { BehaviorSubject, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoadingSubject: Subject<boolean> = new Subject<boolean>();
  pendingRequestCount: number = 0;
  // isLoading:boolean=false;
  // isLoadingSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //behaviorsubject initial değeri anında viryor subject vermez

  constructor() { }

  startLoading() {
    this.pendingRequestCount++;
    this.isLoadingSubject.next(this.pendingRequestCount > 0);
    // this.isLoading=true;
    // this.isLoadingSubject.next(true);
  }
  stopLoading() {
    this.pendingRequestCount--;
    this.isLoadingSubject.next(this.pendingRequestCount > 0);
    // this.isLoading=false;
    // this.isLoadingSubject.next(false);
  }
}
