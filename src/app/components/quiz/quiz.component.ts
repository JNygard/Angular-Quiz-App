import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Services
import { QuestionService } from '../../services/question.service';
import { QuizService } from '../../services/quiz.service';
import { PlayerService } from '../../services/player.service';

// Model
import { Quiz } from '../../model/quiz';
import { Question } from '../../model/question';
import { Player } from '../../model/player';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  faArrowRight = faArrowRight

  player: Player
  options: any[]
  question: Question;
  questions: Question[];
  quiz: Quiz;
  
  points = 0
  fails = 0
  correctPosition = 0
  answerPosition = 0
  pause = false
  success = true
  progress = 0



  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private quizService: QuizService,
    private playerService: PlayerService,
    private _location: Location
    ) { }
    

  ngOnInit() {
    this.getPlayer("1")
    this.route.params.subscribe(routeParams => {
      this.getQuiz(routeParams.id);
    });
  }


  // Get player
  getPlayer(id: string): void {
    this.playerService.getPlayer(id)
      .subscribe(player => {
        this.player = player
      });
  }

  // Update player score
  updateScore(): void {
    this.playerService.updatePlayer(this.player)
      .subscribe();
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

  updateProgress(){
    this.progress = ((this.question.position)/(this.questions.length))*100
  }

  answer(index: number){
    if(!this.pause){
      this.updateProgress()
      this.answerPosition = index
      if(index!=this.correctPosition){
        this.success=false
      }
      this.pause = true
    }
  }

  goNext(){
    if(this.question.position < this.questions.length && this.success){
      this.question = this.questions.find(q => q.position == this.question.position + 1)
      this.setOptions()

      this.pause = false
    }else{
      if(this.success){
        if(!this.player.completed.includes(this.quiz.id)){
          console.log("Updating score")
          this.player.completed.push(this.quiz.id)
          this.updateScore()
        }
        
        // Update quizz to completed
      }
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
