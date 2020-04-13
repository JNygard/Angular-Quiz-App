import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

/*
 Contains example data for frontend
 */

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const questions = [
      // Quiz 1 questions
      {
        id: 1, quizID: 1, catID:1, question: "Example question 1?", position: 1,
        o1r: "Option 1 (correct)", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
        extra: ""
      },{
        id: 2, quizID: 1, catID:1, question: "Here is the question 2, whats up?", position: 2,
        o1r: "Option 2-1(correct)", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
        extra: ""
      },{
        id: 3, quizID: 1, catID:1, question: "Here is the question 3, whats up?", position: 3,
        o1r: "Option 3-1(correct)", o2w: "Option 3-2", o3w: "Option 3-3", o4w: "Option 3-4",
        extra: ""
      },{
        id: 4, quizID: 1, catID:1, question: "Here is the question 4, whats up?", position: 4,
        o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
        extra: ""
      },{
        id: 5, quizID: 1, catID:1, question: "Here is the question 5, whats up?", position: 5,
        o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
        extra: ""
      },
      // Quiz 2 questions
      {
        id: 6, quizID: 2, catID:1, question: "Example quiz 1 question 2, whats up?", position: 1,
        o1r: "Option 1(correct)", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
        extra: ""
      },{
        id: 7, quizID: 2, catID:1, question: "Here is the question 2 from quiz 2,, whats up?", position: 2,
        o1r: "Option 2-1(correct)", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
        extra: ""
      },{
        id: 8, quizID: 2, catID:1, question: "Here is the question 3 from quiz 2,, whats up?", position: 3,
        o1r: "Option 3-1(correct)", o2w: "Option 3-2", o3w: "Option 3-3", o4w: "Option 3-4",
        extra: ""
      },{
        id: 9, quizID: 2, catID:1, question: "Here is the question 4 from quiz 2,, whats up?", position: 4,
        o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
        extra: ""
      },{
        id: 10, quizID: 2, catID:1, question: "Here is the question 5 from quiz 2,, whats up?", position: 5,
        o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
        extra: ""
      },
      // Quiz 3 questions
      {
        id: 11, quizID: 3, catID:1, question: "Forestry question 3 from quiz 3, whats up?", position: 1,
        o1r: "Option 1(correct)", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
        extra: ""
      },{
        id: 12, quizID: 3, catID:1, question: "Here is the question 2 from quiz 3, whats up?", position: 2,
        o1r: "Option 2-1(correct)", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
        extra: ""
      },{
        id: 13, quizID: 3, catID:1, question: "Here is the question 3 from quiz 3, whats up?", position: 3,
        o1r: "Option 3-1(correct)", o2w: "Option 3-2", o3w: "Option 3-3", o4w: "Option 3-4",
        extra: ""
      },{
        id: 14, quizID: 3, catID:1, question: "Here is the question 4 from quiz 3, whats up?", position: 4,
        o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
        extra: ""
      },{
        id: 15, quizID: 3, catID:1, question: "Here is the question 5 from quiz 3, whats up?", position: 5,
        o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
        extra: ""
      },
            // Quiz 4 questions
            {
              id: 16, quizID: 4, catID:2, question: "Quiz 4 question 1. Hello.", position: 1,
              o1r: "Option 1(correct)", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
              extra: ""
            },{
              id: 17, quizID: 4, catID:2, question: "Here is the question 2, whats up?", position: 2,
              o1r: "Option 2-1(correct)", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
              extra: ""
            },{
              id: 3, quizID: 4, catID:2, question: "Here is the question 3, whats up?", position: 3,
              o1r: "Option 3-1(correct)", o2w: "Option 3-2", o3w: "Option 3-3", o4w: "Option 3-4",
              extra: ""
            },{
              id: 18, quizID: 4, catID:2, question: "Here is the question 4, whats up?", position: 4,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },{
              id: 19, quizID: 4, catID:2, question: "Here is the question 5, whats up?", position: 5,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },
            // Quiz 5 questions
            {
              id: 20, quizID: 5, catID:2, question: "Quiz 5 question 2?", position: 1,
              o1r: "Option 1(correct)", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
              extra: ""
            },{
              id: 21, quizID: 5, catID:2, question: "Here is the question 2 from quiz 2,, whats up?", position: 2,
              o1r: "Option 2-1(correct)", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
              extra: ""
            },{
              id: 22, quizID: 5, catID:2, question: "Here is the question 3 from quiz 2,, whats up?", position: 3,
              o1r: "Option 3-1(correct)", o2w: "Option 3-2", o3w: "Option 3-3", o4w: "Option 3-4",
              extra: ""
            },{
              id: 23, quizID: 5, catID:2, question: "Here is the question 4 from quiz 2,, whats up?", position: 4,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },{
              id: 24, quizID: 5, catID:2, question: "Here is the question 5 from quiz 2,, whats up?", position: 5,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },
            // Quiz 6 questions
            {
              id: 25, quizID: 6, catID:2, question: "Quiz 6 question 3", position: 1,
              o1r: "Option 1(correct)", o2w: "Option 1-2", o3w: "Option 1-3", o4w: "Option 1-4",
              extra: ""
            },{
              id: 26, quizID: 6, catID:2, question: "Here is the question 2 from quiz 3, whats up?", position: 2,
              o1r: "Option 2-1(correct)", o2w: "Option 2-2", o3w: "Option 2-3", o4w: "Option 2-4",
              extra: ""
            },{
              id: 27, quizID: 6, catID:2, question: "Here is the question 3 from quiz 3, whats up?", position: 3,
              o1r: "Option 3-1(correct)", o2w: "Option 3-2", o3w: "Option 3-3", o4w: "Option 3-4",
              extra: ""
            },{
              id: 28, quizID: 6, catID:2, question: "Here is the question 4 from quiz 3, whats up?", position: 4,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            },{
              id: 29, quizID: 6, catID:2, question: "Here is the question 5 from quiz 3, whats up?", position: 5,
              o1r: "Option 4-1(correct)", o2w: "Option 4-2", o3w: "Option 4-3", o4w: "Option 4-4",
              extra: ""
            }
    ];


    // Quizzes

    const quizzes = [
    {
      id: 1,
      catID: 1,
      name: "Category 1, quiz 1",
      points: 0,
      completed: true
    },{
      id: 2,
      catID: 1,
      name: "Category 1, quiz 2",
      points: 0,
      completed: false
    },{
      id: 3,
      catID: 1,
      name: "Category 1, quiz 3",
      points: 0,
      completed: false
    },
    {
      id: 4,
      catID: 2,
      name: "Category 2, 1",
      points: 0,
      completed: false
    },{
      id: 5,
      catID: 2,
      name: "Category 2, quiz 2",
      points: 0,
      completed: false
    },{
      id: 6,
      catID: 2,
      name: "Category 2, quiz 3",
      points: 0,
      completed: false
    }
]





   // Players
   const players = [
    {
      id: 1,
      completed: []
    }
  ];


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


    return {questions, categories, quizzes, players};
  }

}