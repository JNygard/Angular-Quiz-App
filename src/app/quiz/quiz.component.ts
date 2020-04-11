import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { QuestionService } from '../question.service';
import { QuizService } from '../quiz.service';

// Model
import { Quiz } from '../model/quiz';
import { Question } from '../model/question';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  // @Input() q: Question;
  options: any[]
  question: Question;
  questions: Question[];
  quiz: Quiz;


  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private quizService: QuizService,
    ) { }
    

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getQuiz(routeParams.id);
    });
  }

  

  // get Questions
  getQuestions(quizID: number): void {
    this.questionService.getQuestionsByQuiz(quizID)
      .subscribe(questions => {
        this.questions = questions;

        // Temp
        if(questions.length>0){
          this.question = questions[0]
          this.options = [
            { id: 1, title: this.question.o1r},
            { id: 2, title: this.question.o2w},
            { id: 3, title: this.question.o3w},
            { id: 4, title: this.question.o4w}
        ]
        }
        
      });
  }

  // get Quiz
  getQuiz(id: number): void {
    this.quizService.getQuiz(id)
      .subscribe(quiz => {
        this.quiz = quiz;
        this.getQuestions(id);
      });
  }

}
