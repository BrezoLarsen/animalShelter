import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AnimalService } from '../../services/animal.service';
import { IAnimal } from '../../../interfaces/animal';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ISpecie } from 'src/app/interfaces/specie';
import { Species, SpeciesLabels } from '../../../../const/species';
import { IFilter } from 'src/const/filters.model';

@Component({
  selector: 'app-detail-specie',
  templateUrl: './detail-specie.component.html',
  styleUrls: ['./detail-specie.component.scss'],
})
export class DetailSpecieComponent {
  public animalsToShow: IAnimal[] = [];
  public showLoading = false;
  private _animals: IAnimal[] = [];
  private _param: string;
  private _ngUnsuscribe: Subject<void> = new Subject<void>();
  private _filters: IFilter = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAnimalSpecieId();
    this.getAnimalsToShow();
  }

  ngOnDestroy() {
    this._ngUnsuscribe.next();
    this._ngUnsuscribe.complete();
  }

  getAnimalsToShow() {
    this.showLoading = true;
    this.animalService
      .getAnimalsByFilters(this._filters)
      .pipe(takeUntil(this._ngUnsuscribe))
      .pipe(finalize(() => (this.showLoading = false)))
      .subscribe((data) => {
        this._animals = data;
        this._animals.forEach((animal) => {
          if (animal.adoptionDate || animal.passAwayDate) {
            return;
          }
          if (animal.showInAdoptionPage === false) {
            return;
          }
          this.animalsToShow.push(animal);
        });
      });
  }

  back() {
    this.location.back();
  }

  private getAnimalSpecieId(): void {
    this._param = this.activatedRoute.snapshot.paramMap.get('specie');
    const species = {
      [SpeciesLabels[Species.DOG]]: Species.DOG,
      [SpeciesLabels[Species.CAT]]: Species.CAT,
      [SpeciesLabels[Species.FERRET]]: Species.FERRET,
      [SpeciesLabels[Species.BIRD]]: Species.BIRD,
      [SpeciesLabels[Species.RABBIT]]: Species.RABBIT,
      [SpeciesLabels[Species.RODENT]]: Species.RODENT,
      [SpeciesLabels[Species.TURTLE]]: Species.TURTLE,
    };

    this._filters.specieId = species[this._param];
  }
}
