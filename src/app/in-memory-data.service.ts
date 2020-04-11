import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Question } from './model/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    // Questions
    const questions = [
      {
        id: 1, quizID: 1, catID:1, question: "Question 1?", positon: 1,
        o1r: "Option 1", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
        extra: "Additional information"
      },{
        id: 2, quizID: 2, catID:2, question: "Question 2?", positon: 2,
        o1r: "Option 2-1", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
        extra: "Additional information"
      }
    ];


    // Quizzes

    const quizzes = [
    {
      id: 1,
      catID: 1,
      name: "Quiz 1",
      points: 0,
      completed: true
    },{
      id: 2,
      catID: 2,
      name: "Qiz 2",
      points: 0,
      completed: false
    }
]



    // Categories
    const categories = [
      {
        id: 1,
        title: "Category 1"
      },
      {
        id: 2,
        title: "Category 2"
      }
    ];


    return {questions, categories, quizzes};
  }

}