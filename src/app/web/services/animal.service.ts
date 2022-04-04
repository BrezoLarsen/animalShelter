import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IAnimal } from '../../interfaces/animal';
import { SETTINGS } from 'src/app/config/settings';
import { IFilter } from '../../../const/filters.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animalsUrl = SETTINGS.API_URL;

  constructor(private httpClient: HttpClient) {}

  getAnimalsByFilters(filters: IFilter): Observable<IAnimal[]> {
    filters.tenantId = SETTINGS.TENANTID;
    return this.httpClient
      .post<IAnimal[]>(
        SETTINGS.API_URL + 'public/getAnimalsByFilters.php',
        filters
      )
      .pipe(
        map((data: IAnimal[]) => {
          return data;
        })
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
