import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url = 'api/questions';  

  constructor( private http: HttpClient) { }


  getQuestionsByQuiz(quizID: number): Observable<Question[]> {

    let params = new HttpParams().set('quizID', '' + quizID);

    return this.http.get<Question[]>(this.url, { params })
      .pipe(tap(_ => console.log('fetched Question')),
        catchError(this.handleError<Question[]>('getQuestions', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
