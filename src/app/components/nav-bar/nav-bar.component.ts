import { Component, OnInit } from '@angular/core';
import { UiServiceService } from "../../services/ui-service.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private uiService: UiServiceService) { }

  ngOnInit() {}

  toggle() {
    this.uiService.toggleSidebar()
  }

}
