import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { faTree, faGlobeEurope, faTrash, faInfo} from '@fortawesome/free-solid-svg-icons';
import { Category } from '../../model/category';
import { Quiz } from '../../model/quiz';
import { UiServiceService } from "../../services/ui-service.service";



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() categories: Category[];
  @Input() quizzes: Quiz[];

  selectedCategory: Category;
  icons = [faGlobeEurope,faTree]
  settingsIcon = [faTrash, faInfo]
  toggleInfo = false

  constructor(
    private router: Router,
    private uiService: UiServiceService
  ) { }
  

  ngOnInit(): void {
    this.setNavBarContent();

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.setNavBarContent()
      }
    });
  }


  resetScore(): void {
    // Reset by refresh since not using real backend
    window.location.reload();
  }

  showInfo(){
    this.toggleInfo = !this.toggleInfo
  }

  closeSidebar(){
    this.uiService.hideMobile()
  }
    

  setNavBarContent() {
    const path = this.router.parseUrl(this.router.url).root.children.primary.segments[0].path
    const id = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;
    if (path === 'category') {
      this.setSelectedCategory(parseInt(id))
    } else if (path === 'quiz') {
      if (this.quizzes) {
        const catID = this.quizzes.find(q => q.id === parseInt(id)).catID
        this.setSelectedCategory(catID)
      }
    }
  }


  setSelectedCategory(id: number) {
    if (this.categories) {
      this.selectedCategory = this.categories.find((i) => i.id === id);
    }
  }

}
