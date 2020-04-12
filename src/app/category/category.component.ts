import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSquare, faCheck } from '@fortawesome/free-solid-svg-icons';

// Services
import { QuizService } from '../services/quiz.service';
import { CategoryService } from '../services/category.service';

// Model
import { Category } from '../model/category';
import { Quiz } from '../model/quiz';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // Icons
  icons = [faSquare, faCheck]
  categories: Category[];
  quizzes: Quiz[];
  selectedCategory: Category;
  progress: number;



  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private categoryService: CategoryService,

  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(routeParams => {
      this.getQuizzes(routeParams.id);
      this.getCategory(routeParams.id);
    });

  }

  // Get quizzes
  getQuizzes(id: string): void {
    this.quizService.getQuizzesByCategory(id)
      .subscribe(quizzes => {
        this.quizzes = quizzes
        this.updateProgress()
      });
  }

  // Get categories
  getCategory(id: string): void {
    this.categoryService.getCategory(id)
      .subscribe(cat => {
        this.selectedCategory = cat;
      });
  }


  // Calculate progress
  updateProgress(): void{
    this.progress = (this.quizzes.filter(q=>q.completed).length/this.quizzes.length)*100
  }

}
