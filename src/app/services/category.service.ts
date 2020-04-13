import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map, share} from 'rxjs/operators';

import { Category } from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url = 'api/categories';  

  private cache: Category[] = [];
  private observableCache: Observable<Category[]>

  constructor(private http: HttpClient) { }


  getCategories(): Observable<Category[]> {
    if (this.cache.length > 0) {
      // console.log("**** Categories from cache ****")
      return of(this.cache);
    } else if (this.observableCache) {
      // Request pending
      return this.observableCache;
    } else {
      // New request needed
      // console.log("**** Fetching categories ****")
      this.observableCache = this.http.get<Category[]>(this.url).pipe(
        map((rawData) => this.mapCachedCategories(rawData)),
        catchError(this.handleError<Category[]>(`getQuizzes`)),
        share())
    }
    return this.observableCache;
  }

  getCategory(id: string): Observable<Category> {
    return this.getCategories().pipe(map(categories => categories.filter(cat => cat.id == parseInt(id))[0]));
  }

  private mapCachedCategories(body: Category[]) {
    this.observableCache = null;
    this.cache = body
    return this.cache;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
