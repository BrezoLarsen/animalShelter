import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SETTINGS } from 'src/app/config/settings';
import { IEvent } from 'src/app/interfaces/event';
import { IAnimalFilter } from 'src/const/animal-filters.model';
import { IEventFilter } from 'src/const/event-filters.model';
import { IAnimal } from '../../interfaces/animal';
import { AnimalService } from '../services/animal.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeAnimals: IAnimal[] = [];
  newAnimals;
  events: IEvent[] = [];

  private _animalFilters: IAnimalFilter = {
    showInAdoptionPage: true,
  };
  private _eventsFilters: IEventFilter = {
    tenantId: SETTINGS.TENANT_ID,
  };
  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private animalService: AnimalService,
    private eventsService: EventService
  ) {}

  ngOnInit(): void {
    this.getAnimals();
    this.getEvents();
  }

  ngOnDestroy() {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  shuffle(array): IAnimal[] {
    return array.sort(() => Math.random() - 0.5);
  }

  private getAnimals(): void {
    this.animalService
      .getAnimalsByFilters(this._animalFilters)
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((data) => {
        this.homeAnimals = data;
        this.homeAnimals = this.shuffle(data).splice(0, 3);
      });
  }

  private getEvents(): void {
    this.eventsService
      .getEventsByFilters(this._eventsFilters)
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((data) => {
        this.events = data;
      });
  }
}
