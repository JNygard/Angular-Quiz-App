import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Services
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

// Model
import { Quiz } from '../model/quiz';
import { Question } from '../model/question';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  faArrowRight = faArrowRight
  
  options: any[]
  question: Question;
  questions: Question[];
  quiz: Quiz;
  
  points = 0
  fails = 0
  correctPosition = 0
  pause = false
  success = false


  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private quizService: QuizService,
    private _location: Location
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
        
        if(questions.length>0){
          this.question = this.questions.find(q => q.position == 1)
          this.setOptions()
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




  // Quiz logic ----------------------------------------------------------------------

  answer(index: number){
    // TODO 
    this.pause = true
  }

  goNext(){
    if(this.question.position < this.questions.length){
      this.question = this.questions.find(q => q.position == this.question.position + 1)
      this.setOptions()

      this.pause = false
    }else{
      this._location.back();
    }
    
  }

  setOptions(){
    let array = [ { id: 1, title: this.question.o1r}, { id: 2, title: this.question.o2w}, { id: 3, title: this.question.o3w},{ id: 4, title: this.question.o4w}]
    
    // Shuffle array
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    // Set correct answer position
    this.correctPosition = array.findIndex(x => x.id === 1);

    this.options = array
  }

}
