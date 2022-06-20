import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { IAnimal } from '../../interfaces/animal';
import { IFilter } from '../../../const/filters.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeAnimals: IAnimal[] = [];
  newAnimals;

  private _filters: IFilter = {
    showInAdoptionPage: true,
  };
  private _ngUnsuscribe: Subject<void> = new Subject<void>();

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService
      .getAnimalsByFilters(this._filters)
      .pipe(takeUntil(this._ngUnsuscribe))
      .subscribe((data) => {
        this.homeAnimals = data;
        this.homeAnimals = this.shuffle(data).splice(0, 3);
      });
  }

  ngOnDestroy() {
    this._ngUnsuscribe.next();
    this._ngUnsuscribe.complete();
  }

  shuffle(array): IAnimal[] {
    return array.sort(() => Math.random() - 0.5);
  }
}
