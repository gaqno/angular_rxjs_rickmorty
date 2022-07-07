import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FetchService } from '../fetch/fetch.service';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  observable: Subject<any> = new Subject();
  ngOnInit() { }
  setObservable(value: any) {
    this.observable.next(value);
  }
  getObservable(): Observable<any> {
    return this.observable.asObservable();
  }
}
