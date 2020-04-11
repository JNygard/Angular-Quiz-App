import { Component, OnInit } from '@angular/core';

// Services
import { QuizService } from './quiz.service';
import { CategoryService } from './category.service';

// Model
import { Category } from './model/category';
import { Quiz } from './model/quiz';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  categories: Category[];
  quizzes: Quiz[];

  constructor(
    private quizService: QuizService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getQuizzes();
  }


  // Get quizzes
  getQuizzes(): void {
    this.quizService.getQuizzes()
    .subscribe(quizzes => {
      this.quizzes = quizzes   
    });
  }

  // Get categories
  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => {
      this.categories = categories;
    });
  }


  
  title = 'quiz-app';
}
