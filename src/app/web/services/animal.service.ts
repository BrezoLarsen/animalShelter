import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IAnimal } from '../../interfaces/animal';
import { ISpecie } from 'src/app/interfaces/specie';

@Injectable({
    providedIn: 'root'
})

export class AnimalService {

    private apiUrl = 'http://hakunamatatafamiliaanimalista.org/api/';

    constructor(private httpClient: HttpClient) { }

    getSpecies(): Observable<ISpecie[]> {
      return this.httpClient.get<ISpecie[]>(this.apiUrl + 'getSpecies.php').pipe(
          tap(data => console.log(data)))
  }

    getAnimals(): Observable<IAnimal[]> {
        return this.httpClient.get<IAnimal[]>(this.apiUrl + 'cats.json').pipe(
            tap(data => JSON.stringify(data)),
            catchError(this.handleError)
        );
    }

    getAnimalsBySpecie(specieText: string): Observable<IAnimal[]> {
      return this.httpClient.get<IAnimal[]>(this.apiUrl + 'cats.json').pipe(
        map((animals: IAnimal[]) => {
          let animalsArray = animals.filter(animal => animal.specie.text === specieText);
          return animalsArray;
        })
      );
    }

    getAnimalBySpecie(specieText: string): Observable<IAnimal | undefined> {
      return this.getAnimals()
        .pipe(
          map((animals: IAnimal[]) => animals.find(animal => animal.specie.text === specieText))
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



