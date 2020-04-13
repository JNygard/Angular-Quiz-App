import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Player } from '../model/player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url = 'api/players';

  constructor(private http: HttpClient) { }


  getPlayer(id: string): Observable<Player> {
    const url = `${this.url}/${id}`;
    return this.http.get<Player>(url).pipe(
      tap(_ => console.log(`fetched Player id=${id}`)),
      catchError(this.handleError<Player>(`getPlayer id=${id}`))
    );
  }

  /** PUT:  */
  updatePlayer(player: Player): Observable<any> {
    return this.http.put(this.url, player, this.httpOptions).pipe(
      tap(_ => console.log(`updated player id=${player.id}`)),
      catchError(this.handleError<any>('updatePlayer'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
