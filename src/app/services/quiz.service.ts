import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap, map, share, filter, } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url = 'api/quizzes';

  private quizzCache: Quiz[] = [];
  private observableCache: Observable<Quiz[]>


  constructor(
    private http: HttpClient) { }


  getQuizzes(): Observable<Quiz[]> {
    if (this.quizzCache.length > 0) {
      console.log("**** Quizzes from cache ****")
      return of(this.quizzCache);
    } else if (this.observableCache) {
      // Request pending
      return this.observableCache;
    } else {
      // New request needed
      console.log("**** Fetching quizzess ****")
      this.observableCache = this.http.get<Quiz[]>(this.url).pipe(
        map((rawData) => this.mapCachedQuizzes(rawData)),
        catchError(this.handleError<Quiz[]>(`getQuizzes`)),
        share())
    }
    return this.observableCache;
  }

  getQuizzesByCategory(catID: string): Observable<Quiz[]> {
    return this.getQuizzes().pipe(map(quizzes => quizzes.filter(quiz => quiz.catID === parseInt(catID))));
  }


  getQuiz(id: number): Observable<Quiz> {
    return this.getQuizzes().pipe(map(quizzes => quizzes.filter(quiz => quiz.id == id)[0]));
  }


  private mapCachedQuizzes(body: Quiz[]) {
    this.observableCache = null;
    this.quizzCache = body
    return this.quizzCache;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}