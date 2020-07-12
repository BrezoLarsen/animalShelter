import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ICat } from '../interfaces/cat';

@Injectable({
    providedIn: 'root'
})

export class CatService {

    private catsUrl = 'api/cats.json';


    constructor(private httpClient: HttpClient) { }

    getCats(): Observable<ICat[]> { 
        return this.httpClient.get<ICat[]>(this.catsUrl).pipe(
            tap(data => console.log('All ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error ocurred: ${err.error.message}`; 
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

}



