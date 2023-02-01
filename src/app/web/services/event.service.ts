import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { SETTINGS } from 'src/app/config/settings';
import { IEvent } from 'src/app/interfaces/event';
import { IEventFilter } from 'src/const/event-filters.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getEventsByFilters(filters: IEventFilter): Observable<IEvent[]> {
    filters.tenantId = SETTINGS.TENANTID;
    return this.httpClient
      .post<IEvent[]>(
        SETTINGS.API_URL + 'public/getEventsByFilters.php',
        filters
      )
      .pipe(
        map((data: IEvent[]) => {
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
