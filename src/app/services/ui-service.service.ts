import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private sidebar = new BehaviorSubject<boolean>(false);
  sharedSidebar = this.sidebar.asObservable();

  constructor() { }

  toggleSidebar() {
    this.sidebar.next(!this.sidebar.value)
  }
}
