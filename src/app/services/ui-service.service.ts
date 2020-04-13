import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HostListener } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private sidebar = new BehaviorSubject<boolean>(false);
  sharedSidebar = this.sidebar.asObservable();
  screenHeight: number;
  screenWidth: number;

  constructor() { 
    this.getScreenSize();
  }

  toggleSidebar() {
    this.sidebar.next(!this.sidebar.value)
  }

  hideMobile() {
    if(this.screenWidth<768){
      this.sidebar.next(true)
    }
  }


  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        console.log(this.screenHeight, this.screenWidth);
  }
}
