import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

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

    getAnimalBySpecie(specie: string): Observable<IAnimal | undefined> {
      return this.getAnimals()
        .pipe(
          map((animals: IAnimal[]) => animals.find(animal => animal.specie === specie))
        );
    }

    getAnimalById(id) {
      return this.getAnimals()
          .pipe(
            map((animals: IAnimal[]) => animals.find(animal => animal.id === id))
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



