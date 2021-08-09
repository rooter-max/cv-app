import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CVData } from '../interface/cvdata';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get cv data from json
   */
  getCvData(): Observable<any> {
    return this.http.get<CVData>(`./assets/data.json`).pipe(
      tap((data: CVData) => {
        console.log(data);
      })
      //catchError(this.handleError<CVData>('searchHeroes', {title: 'aa'}))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
