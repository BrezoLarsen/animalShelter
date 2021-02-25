import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IAnimal } from '../interfaces/animal';

@Injectable({
    providedIn: 'root'
})

export class AnimalService {

    private animalsUrl = 'api/';

    constructor(private httpClient: HttpClient) { }

    getAnimals(): Observable<IAnimal[]> {
        return this.httpClient.get<IAnimal[]>(this.animalsUrl + 'cats.json').pipe(
            tap(data => console.log('All ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getWeakAnimals(): Observable<IAnimal[]> {
        return this.httpClient.get<IAnimal[]>(this.animalsUrl + 'weakCats.json').pipe(
            tap(data => console.log('Weak ' + JSON.stringify(data))),
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



