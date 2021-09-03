import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    return this.http.get<CVData>(`/assets/data.json`).pipe(
      tap((data: CVData) => {
        // console.log(data)
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
