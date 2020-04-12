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

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Question')),
        catchError(this.handleError<Question[]>('getQuestions', []))
      );
  }

  getQuestionsByQuiz(quizID: number): Observable<Question[]> {

    let params = new HttpParams().set('quizID', '' + quizID);


    return this.http.get<Question[]>(this.url, { params })
      .pipe(
        tap(_ => this.log('fetched Question')),
        catchError(this.handleError<Question[]>('getQuestions', []))
      );
  }

  getQuestion(id: number): Observable<Question> {
    const url = `${this.url}/${id}`;
    return this.http.get<Question>(url).pipe(
      tap(_ => this.log(`fetched question id=${id}`)),
      catchError(this.handleError<Question>(`getQuestion id=${id}`))
    );
  }

  private log(message: string) {
    console.log(message)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
