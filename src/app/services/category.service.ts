import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Category } from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url = 'api/categories';  

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Category')),
        catchError(this.handleError<Category[]>('getCategory', []))
      );
  }

  getCategory(id: string): Observable<Category> {
    const url = `${this.url}/${id}`;
    return this.http.get<Category>(url).pipe(
      tap(_ => this.log(`fetched Category id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
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
