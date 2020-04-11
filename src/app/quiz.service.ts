import { Injectable } from '@angular/core';
import { Quiz } from './model/quiz';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url = 'api/quizzes';  

  constructor(
    private http: HttpClient) { }


getQuizzes (): Observable<Quiz[]> {
  return this.http.get<Quiz[]>(this.url)
    .pipe(
      tap(_ => this.log('fetched Quiz')),
      catchError(this.handleError<Quiz[]>('getQuiz', []))
    );
}

getQuizzesByCategory (catID: string): Observable<Quiz[]> {

  let params = new HttpParams().set('catID', ''+catID);
  return this.http.get<Quiz[]>(this.url, {params})
    .pipe(
      tap(_ => this.log('fetched Quiz')),
      catchError(this.handleError<Quiz[]>('getQuiz', []))
    );
}


getQuiz(id: number): Observable<Quiz> {
  const url = `${this.url}/${id}`;
  return this.http.get<Quiz>(url).pipe(
    tap(_ => this.log(`fetched Quiz id=${id}`)),
    catchError(this.handleError<Quiz>(`getQuiz id=${id}`))
  );
}

private log(message: string) {
  console.log(message)
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

}